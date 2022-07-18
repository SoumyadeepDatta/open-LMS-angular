import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseURL } from '../config/base-url';

@Injectable({
  providedIn: 'root'
})
export class LibService {

  constructor(private http:HttpClient) { }

  issueBook(issuance:any){
    return this.http.post(`${BaseURL.baseURL}/issuance/issueBook`,issuance);
  }

  canIssue(issuance:any){
    return this.http.post(`${BaseURL.baseURL}/issuance/canIssue`,issuance);
  }

  getAllDetails(){
    return this.http.get(`${BaseURL.baseURL}/issuance/allIssuanceDetails`);
  }

  // get the list of books borrowed by a student with id == sid
  getIssuedBooks(sid:any){
    return this.http.get(`${BaseURL.baseURL}/issuance/issuedBooks/${sid}`);
  }

  returnBook(sid:any,bid:any){
    return this.http.delete(`${BaseURL.baseURL}/return/returnBook`,{params:{
      sid:sid,
      bid:bid
    }});
  }

  findIssuanceBySidAndBid(sid:any,bid:any){
    return this.http.get(`${BaseURL.baseURL}/issuance/findIssuance`,{params:{
      sid:sid,
      bid:bid
    }})
  }


  approveIssuance(issuance:any){
    return this.http.put(`${BaseURL.baseURL}/issuance/approve`,issuance);
  }

}
