import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  hide = true;

  credential = {
    username: '',
    password: '',
  };

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }

  loginStudent(){
    if(this.credential.username=='' || this.credential.password==''){
      window.location.reload();
    }
    else{
      this.studentService.login(this.credential);
      window.location.href='/student';
    }
  }

}
