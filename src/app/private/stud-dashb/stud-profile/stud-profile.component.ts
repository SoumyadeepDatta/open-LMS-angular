import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentService } from 'src/app/services/student.service';

export interface EditProfileDialogData {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  sem: number;
}

@Component({
  selector: 'app-stud-profile',
  templateUrl: './stud-profile.component.html',
  styleUrls: ['./stud-profile.component.css'],
})
export class StudProfileComponent implements OnInit {
  student = {
    id: '',
    name: '',
    username: '',
    email: '',
    password: '',
    sem: '',
  };

  constructor(
    private studentService: StudentService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.studentService.fetchStudent().subscribe(
      (e: any) => {
        this.student = e;
      },
      (err) => {
        console.log(err);
        window.location.href = '/login';
      }
    );
  }

  openEditProfileDialog(student:any) {
    const dialogRef = this.dialog.open(EditStudentProfile, {
      width: '400px',
      data: student
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }
}


@Component({
  selector: 'edit-stud-profile',
  templateUrl: 'edit-stud-profile.html',
})
export class EditStudentProfile implements OnInit{

  student:any;

  constructor(
    private studentService:StudentService,
    public dialogRef: MatDialogRef<EditStudentProfile>,
    @Inject(MAT_DIALOG_DATA) public data: EditProfileDialogData
  ) {}

  ngOnInit(): void {
    this.student=this.data;
  }

  updateStudent(){
    this.studentService.update(this.student).subscribe((e:any)=>{
      console.table(e);
      this.dialogRef.close();
    },
    err=>{
      console.log(err);
      
    }
    );
  }

}
