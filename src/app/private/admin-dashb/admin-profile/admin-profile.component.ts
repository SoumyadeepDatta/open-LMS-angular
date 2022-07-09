import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';

export interface EditProfileDialogData {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  admin={
    id:'',
    name:'',
    username:'',
    email:'',
    password:'',
    role:''
  }

  constructor(
    private adminService:AdminService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.adminService.fetchAdmin().subscribe((e:any)=>{
      this.admin=e;
    },
    err=>{
      console.log(err);
      window.location.href='/login';
    }
    );
  }

  openEditProfileDialog(admin:any) {
    const dialogRef = this.dialog.open(EditAdminProfile, {
      width: '400px',
      data: admin
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'edit-admin-profile',
  templateUrl: 'edit-admin-profile.html',
})
export class EditAdminProfile implements OnInit{

  admin:any;

  constructor(
    private adminService:AdminService,
    public dialogRef: MatDialogRef<EditAdminProfile>,
    @Inject(MAT_DIALOG_DATA) public data: EditProfileDialogData
  ) {}

  ngOnInit(): void {
    this.admin=this.data;
  }

  updateAdmin(){
    this.adminService.update(this.admin).subscribe((e:any)=>{
      console.table(e);
      this.dialogRef.close();
    },
    err=>{
      console.log(err);
      
    }
    );
  }

}
