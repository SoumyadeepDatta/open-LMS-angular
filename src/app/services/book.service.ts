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

  update(b:any){
    return this.http.put(`http://localhost:8080/book/update`,b);
  }

  delete(id:any){
    return this.http.delete(`http://localhost:8080/book/delete/${id}`);
  }
}
