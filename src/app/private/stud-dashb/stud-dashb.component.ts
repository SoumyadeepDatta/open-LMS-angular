import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-stud-dashb',
  templateUrl: './stud-dashb.component.html',
  styleUrls: ['./stud-dashb.component.css']
})
export class StudDashbComponent implements OnInit {

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    // TODO auth guard
  }

  logout(){
    this.studentService.logoutStudent();
    window.location.href='/login';
  }

}
