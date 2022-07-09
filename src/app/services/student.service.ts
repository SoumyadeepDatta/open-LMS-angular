import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {


  credential = {
    username: '',
    password: '',
  };


  constructor(private http: HttpClient) {}

  register(s: any) {
    return this.http.post(`http://localhost:8080/student/register`, s);
  }

  login(c:any):void{
    // no http call here. http login check will be done automatically (by auth guard)
    // when window location is navigated to Student Dashboard 
    this.saveStudentLocaly(c.username,c.password);
  }

  saveStudentLocaly(username: any, password: any) {
    localStorage.setItem('type', 'student');
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }

  //later move the below fn to a completely different service userService
  //as it is common to both student and admin service
  deleteLoggedUserLocaly() {
    localStorage.removeItem('type');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  fetchStudent() {
    this.credential.username = localStorage.getItem('username') || '';
    this.credential.password = localStorage.getItem('password') || '';
    return this.http.post(
      `http://localhost:8080/student/login`,
      this.credential
    );
  }

  logoutStudent(): void {
    this.deleteLoggedUserLocaly();
    
  }

  fetchAll(){
    return this.http.get(`http://localhost:8080/student/fetchAll`);
  }

  update(student:any){
    return this.http.put(`http://localhost:8080/student/update`,student);
  }


}
