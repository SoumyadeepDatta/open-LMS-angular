import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseURL } from '../config/base-url';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  fetchAll(){
    return this.http.get(`${BaseURL.baseURL}/book/fetchAll`);
  }

  add(b:any) {
    return this.http.post(`${BaseURL.baseURL}/book/add`,b);
  }

  update(b:any){
    return this.http.put(`${BaseURL.baseURL}/book/update`,b);
  }

  fetch(bid:any) {
    return this.http.get(`${BaseURL.baseURL}/book/fetch/${bid}`);
  }

  delete(id:any){
    return this.http.delete(`${BaseURL.baseURL}/book/delete/${id}`);
  }
}
