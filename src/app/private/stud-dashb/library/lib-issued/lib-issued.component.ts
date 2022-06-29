import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookService } from 'src/app/services/book.service';
import { LibService } from 'src/app/services/lib.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-lib-issued',
  templateUrl: './lib-issued.component.html',
  styleUrls: ['./lib-issued.component.css']
})
export class LibIssuedComponent implements OnInit {

  // books = [];

  displayedColumns: string[] = ['id', 'name', 'isbn', 'qty', 'actions'];

  // sid:any;

  dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private studentService:StudentService,
    private libService:LibService,
    private bookService:BookService,
    private cdr: ChangeDetectorRef,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.studentService.fetchStudent().subscribe((e:any)=>{
      // this.sid=e.id;
      console.log("student fetched");
      console.log(e.id);
      
      this.fetchIssuedBooks(e.id);
      
    },
    err=>{
      console.log(err);
      window.location.href='/login';
    }
    );


    // console.log(this.sid);
    


    
  }

  //1
  cancelIssuance(book:any){
    this.studentService.fetchStudent().subscribe((e:any)=>{
      this.libService.findIssuanceBySidAndBid(e.id,book.id).subscribe((e:any)=>{
        console.table(e);
        if(e.approved==false){
          this.libService.returnBook(e.sid,e.bid).subscribe(e=>{
            console.log(e);
            this.ngOnInit();
          });
        }
      });
    });
  }


  //2
  // fetchBookDetailsForIssuance(sid:any,bid:any){
  //   this.bookService.fetch(bid).subscribe(e=>{
  //     this.fetchIssuanceDetails(sid,bid);
  //   });
  // }

  //2
  fetchIssuanceDetails(sid:any,bid:any){
    this.libService.findIssuanceBySidAndBid(sid,bid).subscribe(e=>{
      console.table(e);
    });
  }

  deleteIssuanceDetails(sid:any,bid:any){
    this.libService.returnBook(sid,bid).subscribe(e=>{
      console.log(e);
      this.ngOnInit();
    });
  }

  fetchIssuedBooks(sid:any){
    this.libService.getIssuedBooks(sid).subscribe(
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
