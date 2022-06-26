import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-dashb',
  templateUrl: './admin-dashb.component.html',
  styleUrls: ['./admin-dashb.component.css']
})
export class AdminDashbComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  logout(){
    this.adminService.logoutAdmin();
    window.location.href='/login';
  }
}
