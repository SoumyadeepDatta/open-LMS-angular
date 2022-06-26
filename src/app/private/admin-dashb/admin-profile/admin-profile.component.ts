import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

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

  constructor(private adminService:AdminService) { }

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

}
