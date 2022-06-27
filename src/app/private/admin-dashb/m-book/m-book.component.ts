import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-m-book',
  templateUrl: './m-book.component.html',
  styleUrls: ['./m-book.component.css'],
})
export class MBookComponent implements OnInit {
  books = [];

  displayedColumns: string[] = ['id', 'name', 'isbn', 'qty'];

  dataSource:any;
  

  book = {
    id: '',
    isbn: '',
    name: '',
    qty: '',
  };
  

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  constructor(
    private bookService: BookService,
    private cdr: ChangeDetectorRef
  ) {}

  

  ngOnInit(): void {
    this.bookService.fetchAll().subscribe(
      (e: any) => {
        this.dataSource=new MatTableDataSource<any>(e);
        
        this.dataSource.paginator = this.paginator;
        this.cdr.detectChanges();
      },
      (err) => {
        console.error('an error occured');

        console.log(err);
      }
    );
  }
}
