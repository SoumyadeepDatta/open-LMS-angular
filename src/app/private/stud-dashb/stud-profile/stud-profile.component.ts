import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-stud-profile',
  templateUrl: './stud-profile.component.html',
  styleUrls: ['./stud-profile.component.css']
})
export class StudProfileComponent implements OnInit {

  student={
    id:'',
    name:'',
    username:'',
    email:'',
    password:'',
    sem:''
  }

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    
    //////////////////////////////////////////move to guard
    
    /////////////////////////////////////////////

    this.studentService.fetchStudent().subscribe((e:any)=>{
      this.student=e;
    },
    err=>{
      console.log(err);
      window.location.href='/login';
    }
    );
  }

}
