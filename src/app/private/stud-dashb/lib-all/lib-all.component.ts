import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookService } from 'src/app/services/book.service';
import { LibService } from 'src/app/services/lib.service';
import { StudentService } from 'src/app/services/student.service';


export interface BookTableRow{
  id: number;
  name: string;
  auther:string;
  publisher:string;
  isbn: number;
  qty: number;
}

@Component({
  selector: 'app-lib-all',
  templateUrl: './lib-all.component.html',
  styleUrls: ['./lib-all.component.css'],
})
export class LibAllComponent implements OnInit {
  
  book!: BookTableRow;


  displayedColumns: string[] = ['id', 'name', 'auther', 'publisher', 'isbn', 'qty', 'actions'];

  dataSource: any;

  

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
        this.dataSource = new MatTableDataSource<any>(e.map((x:any)=>{
          this.book=x;
          return this.book;
        }));

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

  
  

  openIssueBookDialog(book:any){
    const dialogRef = this.dialog.open(IssueBook, {
      width: '300px',
      data: book,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }

}


@Component({
  selector: 'issue-book',
  templateUrl: 'issue-book.html',
})
export class IssueBook implements OnInit{

  book:any;

  issuance = {
    id: '',
    sid: '',
    bid: ''
  };

  canIssueBook:boolean=false;

  constructor(
    public dialogRef: MatDialogRef<IssueBook>,
    @Inject(MAT_DIALOG_DATA) public data: BookTableRow,
    private studentService: StudentService,
    private libService: LibService
  ){}
  
  ngOnInit(): void {
    this.studentService.fetchStudent().subscribe(
      (e:any)=>{
        this.book=this.data;
        this.issuance.sid=e.id;
        this.issuance.bid=this.data.id.toString();

        this.libService.canIssue(this.issuance).subscribe(
          (c:any)=>{
              this.canIssueBook=c;
          }, crr=>{console.log("error in c");
          }
        );
      }, err=>{console.log("err in e");
      }
    );
      
  }

  

  issueBook(bid: any) {
    this.studentService.fetchStudent().subscribe(
      (e: any) => {
        this.issuance.sid = e.id;
        this.issuance.bid = bid;

        this.libService.issueBook(this.issuance).subscribe(
          (e:any) => {
            this.ngOnInit();
            console.table(e);
            this.dialogRef.close();
          },
          (err) => {
            console.table(err);
            console.log('error in issue books');
            console.error('an error occured');
          }
        );
      },
      (err) => {
        console.log(err);
        console.log('error in fetch stud');

        console.error('an error occured');
      }
    );
  }

}
