import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibService {

  constructor(private http:HttpClient) { }

  issueBook(issuance:any){
    return this.http.post(`http://localhost:8080/issuance/issueBook`,issuance);
  }

  // get the list of books borrowed by a student with id == sid
  getIssuedBooks(sid:any){
    return this.http.get(`http://localhost:8080/issuance/issuedBooks/${sid}`);
  }

  returnBook(sid:any,bid:any){
    return this.http.delete(`http://localhost:8080/return/returnBook`,{params:{
      sid:sid,
      bid:bid
    }});
  }

  findIssuanceBySidAndBid(sid:any,bid:any){
    return this.http.get(`http://localhost:8080/issuance/findIssuance`,{params:{
      sid:sid,
      bid:bid
    }})
  }
}
