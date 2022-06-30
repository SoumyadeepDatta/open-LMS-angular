import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LibService } from 'src/app/services/lib.service';

@Component({
  selector: 'app-m-lib',
  templateUrl: './m-lib.component.html',
  styleUrls: ['./m-lib.component.css']
})
export class MLibComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'book', 'actions'];

  dataSource: any;

  issuance={
    sid:'',
    bid:''
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private libService:LibService,
    private cdr: ChangeDetectorRef,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.libService.getAllDetails().subscribe((e:any)=>{
      this.dataSource = new MatTableDataSource<any>(e);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cdr.detectChanges();
    });
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

  approve(sid:any,bid:any){
    this.issuance.sid=sid;
    this.issuance.bid=bid;

    this.libService.approveIssuance(this.issuance).subscribe((e:any)=>{
      console.log(e);
      this.ngOnInit();
    },
    err=>{
      console.table(err);
    });
  }

}
