import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  hide = true;

  credential = {
    username: '',
    password: '',
  };

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  loginAdmin(){
    if(this.credential.username=='' || this.credential.password==''){
      window.location.reload();
    }
    else{
      this.adminService.login(this.credential);
      window.location.href='/admin';
    }
  }

}
