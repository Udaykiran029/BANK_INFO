import { Component, forwardRef, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
// import {Account} from './../../models/account';
// import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-view-accounts',
  templateUrl: './view-accounts.component.html',
  styleUrl: './view-accounts.component.css',
  imports:[ReactiveFormsModule,NgFor],
  standalone:true,
  providers:[{provide: ViewAccountsComponent, useExisting: forwardRef(() => ViewAccountsComponent)}],
  // schemas: [NO_ERRORS_SCHEMA],
})
export class ViewAccountsComponent implements OnInit{
  accounts:any = [];
  
  constructor(private customerService: CustomerService){}


  ngOnInit(): void{
    this.customerService.getAllAccounts().subscribe((data)=>{
        this.accounts=data;
      }
    );
  }


}
