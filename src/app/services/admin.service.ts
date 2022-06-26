import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  credential = {
    username: '',
    password: '',
  };

  constructor(private http: HttpClient) { }

  register(s: any) {
    return this.http.post(`http://localhost:8080/admin/register`, s);
  }

  login(c:any):void{
    // no http call here. http login check will be done automatically (by auth guard)
    // when window location is navigated to Admin Dashboard 
    this.saveAdminLocaly(c.username,c.password);
  }

  saveAdminLocaly(username: any, password: any) {
    localStorage.setItem('type', 'admin');
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }

  //later move the below fn to a completely different service userService
  //as it is common to both Admin and Admin service
  deleteLoggedUserLocaly() {
    localStorage.removeItem('type');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  fetchAdmin() {
    this.credential.username = localStorage.getItem('username') || '';
    this.credential.password = localStorage.getItem('password') || '';
    return this.http.post(
      `http://localhost:8080/admin/login`,
      this.credential
    );
  }

  logoutAdmin(): void {
    this.deleteLoggedUserLocaly();
    
  }
}
