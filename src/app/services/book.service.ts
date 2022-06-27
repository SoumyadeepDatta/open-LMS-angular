import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  fetchAll(){
    return this.http.get(`http://localhost:8080/book/fetchAll`);
  }

  add(b:any) {
    return this.http.post(`http://localhost:8080/book/add`,b);
  }
}
