import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface EditBookDialogData {
  id: number;
  name: string;
  auther:String;
  publisher:String;
  isbn: number;
  qty: number;
}

@Component({
  selector: 'app-m-book',
  templateUrl: './m-book.component.html',
  styleUrls: ['./m-book.component.css'],
})
export class MBookComponent implements OnInit {
  books = [];

  displayedColumns: string[] = ['id', 'name','auther', 'publisher', 'isbn', 'qty', 'actions'];

  dataSource: any;

  // book = {
  //   id: '',
  //   isbn: '',
  //   name: '',
  //   qty: '',
  // };

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private bookService: BookService,
    private cdr: ChangeDetectorRef,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.bookService.fetchAll().subscribe(
      (e: any) => {
        this.dataSource = new MatTableDataSource<any>(e);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cdr.detectChanges();
      },
      (err) => {
        console.error('an error occured');

        console.log(err);
      }
    );
  }

  deleteBook(id:any){
    this.bookService.delete(id).subscribe(e=>{
      console.log(e);
      this.ngOnInit();
    },
    err=>{
      console.table(err);
      
    }
    );
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openAddBookDialog() {
    const dialogRef = this.dialog.open(AddBook, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditBookDialog(book: any) {
    const dialogRef = this.dialog.open(EditBook, {
      width: '400px',
      data: book,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'edit-book',
  templateUrl: 'edit-book.html',
})
export class EditBook implements OnInit {

  book: any;

  constructor(
    private bookService: BookService,
    public dialogRef: MatDialogRef<EditBook>,
    @Inject(MAT_DIALOG_DATA) public data: EditBookDialogData
  ) {}

  ngOnInit(): void {
    this.book = this.data;
  }

  editBook() {
    this.bookService.update(this.book).subscribe(
      (e) => {
        console.table(e);
        this.dialogRef.close();
      },
      (err) => {
        console.table(err);
      }
    );
  }
}



@Component({
  selector: 'add-book',
  templateUrl: 'add-book.html',
})
export class AddBook {

  book = {
    id: '',
    isbn: '',
    name: '',
    auther:'',
    publisher:'',
    qty: ''
  };

  constructor(private bookService: BookService,public dialogRef: MatDialogRef<AddBook>){}

  addBook(){
    this.bookService.add(this.book).subscribe(e=>{
      console.table(e);
      this.dialogRef.close();
    },
    err=>{
      console.table(err);
    }
    );
  }
}