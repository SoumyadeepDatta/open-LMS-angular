import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-m-book',
  templateUrl: './m-book.component.html',
  styleUrls: ['./m-book.component.css'],
})
export class MBookComponent implements OnInit {
  books = [];

  displayedColumns: string[] = ['id', 'name', 'isbn', 'qty','actions'];

  dataSource:any;
  

  book = {
    id: '',
    isbn: '',
    name: '',
    qty: '',
  };
  

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  constructor(
    private bookService: BookService,
    private cdr: ChangeDetectorRef,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  

  ngOnInit(): void {
    this.bookService.fetchAll().subscribe(
      (e: any) => {
        this.dataSource=new MatTableDataSource<any>(e);
        
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

}
