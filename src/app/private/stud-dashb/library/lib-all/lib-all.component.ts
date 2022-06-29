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
  selector: 'app-lib-all',
  templateUrl: './lib-all.component.html',
  styleUrls: ['./lib-all.component.css'],
})
export class LibAllComponent implements OnInit {
  books = [];

  displayedColumns: string[] = ['id', 'name', 'isbn', 'qty', 'actions'];

  dataSource: any;

  // sid:any;

  issuance = {
    id: '',
    sid: '',
    bid: '',
  };

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private bookService: BookService,
    private studentService: StudentService,
    private libService: LibService,
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

  canIssue(bid:any):boolean{
    return true;
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

  issueBooks(bid: any) {
    this.studentService.fetchStudent().subscribe(
      (e: any) => {
        this.issuance.sid = e.id;
        this.issuance.bid = bid;

        this.libService.issueBook(this.issuance).subscribe(
          (e:any) => {
            this.ngOnInit();
            console.table(e);
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
