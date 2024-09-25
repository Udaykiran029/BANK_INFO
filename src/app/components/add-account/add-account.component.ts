import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
// import {Account} from './../../models/account';
// import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css',
  standalone:true,
  imports:[ReactiveFormsModule]
})
export class AddAccountComponent implements OnInit{
  // newAccount: Account = new Account();
  customerId!: number;
  AddSavingsAccountForm:FormGroup;
  AddCheckingAccountForm:FormGroup;
  ngOnInit(): void {
    this.FormDetails();
  }
  constructor(private fb:FormBuilder,private customerService:CustomerService){}
  FormDetails(){
    this.AddSavingsAccountForm=this.fb.group({
      customerId:[''],
      balance:[''],
      interestRate:['']
    });
    this.AddCheckingAccountForm=this.fb.group({
      customerId:[''],
      balance:[''],
      nextCheckNumber:['']
    })
  }
  addSavingsAccount(): void{
    this.customerService.addSavingsAccount(1, 2)
    .subscribe((data)=>{
      alert('Savings account added successfully!');

    }
    );
  }

  addCheckingAccount(): void {
    this.customerService.addCheckingAccount(this.customerId).subscribe((data) => {
      alert('Checking account added successfully!');
    });
  }


}
