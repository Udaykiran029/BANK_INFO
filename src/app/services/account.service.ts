import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Account} from '../models/account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8080/api/customers';
  constructor(private http: HttpClient) { }

  //we get all accounts
  getAllAccounts(): Observable<Account[]>{
    return this.http.get<Account[]>(`${this.apiUrl}/accounts`);
  }

  //we add a savings Account
  addSavingsAccount(customerId:number, account: Account): Observable<Account>{
    return this.http.post<Account>(`${this.apiUrl}/${customerId}/savings`,account);
  }

  //We add a checking Account
  addCheckingAccount(customerId:number, account:Account): Observable<Account>{
    return this.http.post<Account>(`${this.apiUrl}/${customerId}/checking`,account);
  }
  


}
