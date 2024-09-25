import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:8080/api/customers';

  constructor(private http:HttpClient) { }


  //we get all customers
  getAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.apiUrl}`);
  }
  //we get customer byId
  getCustomerById(id:number): Observable<Customer>{
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }

  //we add a single customer
  addCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(`${this.apiUrl}/person`,customer);
  }

  //we update a customer
  updateCustomer(id: number, customer:Customer): Observable<Customer>{
    return this.http.put<Customer>(`${this.apiUrl}/person/${id}`,customer);
  }

  deleteCustomer(id:number): Observable<void>{
    
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
  getValidationMessage(formcontrol: AbstractControl, errorkey: string, lablename: string, key: string, skipkeys: string): string {
    debugger;
    let errormessage: string;
    if (errorkey == 'required') {
      errormessage = lablename + ' ' + errorkey
    }
    else if (errorkey == 'email' || errorkey == 'pattern') {
      errormessage = 'Enter the valid email'
    }
    else if (errorkey == 'minlength') {
      errormessage = 'Enter the data with minimum length'
    }
    else if (errorkey == 'maxlength') {
      errormessage = 'Enter the data within the maximum length'
    }
    return errormessage;
  }
  savecustomerdetails(data){
    debugger
    let apiPath;
    let httpHeaders = new HttpHeaders({
      'Content-Type':'application/json',
      'Cache-Control':'no-cache'
    })
    httpHeaders.append('Access-Control-Allow-Origin','/*');
    let options = {
      headers:httpHeaders
    }
    return this.http.post('http://localhost:8080/api/customers/person',data,options);
  }
  getusersdata(type){
    debugger
    return this.http.get('http://localhost:8080/api/customers?='+type);
  }
  showErrorMessage(msg){
    debugger
    // this.toastr.error()
  }
  deletesingleuser(id): Observable<any>{
    debugger
    return this.http.delete('http://localhost:8080/api/customers/?='+id);
  }
  updatepersondetails(customerId,data){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put('http://localhost:8080/api/customers/person/'+customerId,data,{headers});
  }
  GetallaccountsbyCity(city){
    return this.http.get('http://localhost:8080/api/customers/accounts/city/?='+city);
  }
  getAllAccounts(){
    return this.http.get('http://localhost:8080/api/customers/accounts');
  }
  addCheckingAccount(customerId){
    return this.http.get('http://localhost:8080/api/customers/accounts?='+customerId);
  }
  addSavingsAccount(customerid,newacc){
    return this.http.post('http://localhost:8080/api/customers/person',customerid);
  }
}
