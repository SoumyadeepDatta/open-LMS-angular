import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student={
    id:'',
    name:'',
    username:'',
    email:'',
    password:'',
    sem:''
  }

  private isLogged:boolean=false;

  credential={
    username:'',
    password:''
  }

  

  constructor(private http:HttpClient) { }

  register(s:any) {
    return this.http.post(`http://localhost:8080/student/register`,s);
  }

  saveStudentLocaly(username:any,password:any){
    localStorage.setItem("type","student");
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
    
  }

  //later move the below fn to a completely different service userService
  //as it is common to both student and admin service
  deleteLoggedUserLocaly(){
    localStorage.removeItem("type");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    
  }

  // loginStudent():void{
    
  //   this.saveLoggedUserLocaly();
  // }

  isStudentLogged():boolean{
    if(localStorage.getItem("type")=="student") {
      this.credential.username=localStorage.getItem("username")||'';
      this.credential.password=localStorage.getItem("password")||'';
      this.http.post(`http://localhost:8080/student/login`,this.credential).subscribe((e:any)=>{
        if(
          this.credential.username==e.username &&
          this.credential.password==e.password
        ) {
          this.isLogged=true;
        }
      },
      err=>{
        console.log(err);
        
        this.isLogged=false;
      }
      );
    }
    
    return this.isLogged;
  }

  fetchStudent(){
    this.credential.username=localStorage.getItem("username")||'';
      this.credential.password=localStorage.getItem("password")||'';
    return this.http.post(`http://localhost:8080/student/login`,this.credential);
  }

  logoutStudent():void{
    this.deleteLoggedUserLocaly();
    this.isLogged=false;
  }

  setStudent(s:any){
    this.student=s;
  }

  getStudent(){
    return this.student;
  }

}
