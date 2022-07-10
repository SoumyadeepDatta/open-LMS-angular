import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from 'src/app/services/student.service';

export interface ViewStudentDialogData {
  id: number;
  name: string;
  username: string;
  email:string
  sem:number
}

@Component({
  selector: 'app-m-stud',
  templateUrl: './m-stud.component.html',
  styleUrls: ['./m-stud.component.css']
})
export class MStudComponent implements OnInit {

  students = [];

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'sem' , 'actions'];

  dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private studentService: StudentService,
    private cdr: ChangeDetectorRef,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.studentService.fetchAll().subscribe(
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


  openViewStudentDialog(student: any) {
    const dialogRef = this.dialog.open(ViewStudent, {
      width: '300px',
      data: student,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }



}


@Component({
  selector: 'view-student',
  templateUrl: 'view-student.html',
})
export class ViewStudent implements OnInit{

  student:any;


  constructor(
    public dialogRef: MatDialogRef<ViewStudent>,
    @Inject(MAT_DIALOG_DATA) public data: ViewStudentDialogData
  ){}


  ngOnInit(): void {
    this.student=this.data;
  }

}