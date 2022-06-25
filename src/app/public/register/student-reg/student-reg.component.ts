import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-reg',
  templateUrl: './student-reg.component.html',
  styleUrls: ['./student-reg.component.css']
})
export class StudentRegComponent implements OnInit {

  hide=true;

  loggedStudent={
    id:'',
    name:'',
    username:'',
    email:'',
    password:'',
    sem:''
  }

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    
    
  }

  registerStudent():void{
    this.studentService.register(this.loggedStudent).subscribe((e:any)=>{
      
      this.studentService.saveStudentLocaly(e.username,e.password);
      window.location.href='/student';
      
      
    });
  }
}
