import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-reg',
  templateUrl: './admin-reg.component.html',
  styleUrls: ['./admin-reg.component.css']
})
export class AdminRegComponent implements OnInit {

  hide=true;

  loggedAdmin={
    id:'',
    name:'',
    username:'',
    email:'',
    password:'',
    role:''
  }

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  registerAdmin():void{

    if(
      this.loggedAdmin.email=='' ||
      this.loggedAdmin.username=='' ||
      this.loggedAdmin.password=='' ||
      this.loggedAdmin.name==''
    ){
      window.location.reload();
    }
  
    else {
      this.adminService.register(this.loggedAdmin).subscribe((e:any)=>{
      
        this.adminService.saveAdminLocaly(e.username,e.password);
        window.location.href='/admin';
        
        
      });
    }
  }

}
