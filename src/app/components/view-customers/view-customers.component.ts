
// import { CustomerService } from './../../services/customer.service';
import { Component, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { NgFor } from '@angular/common';
// import { Customer } from './../../models/customer';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css'],
  standalone:true,
  imports:[ReactiveFormsModule,NgFor],
  providers: [
    // HttpClientModule
  {provide: ViewCustomersComponent, useExisting: forwardRef(() => ViewCustomersComponent)}
  ],
})
export class ViewCustomersComponent {
  // customers: Customer[] = [];
  // selectedCustomer: Customer | null = null; 
  isEditMode: boolean = false;
  customerdata:any=[];
  viewAccountsForm:FormGroup;
  customerId:any;
  constructor(private customerService:CustomerService,private fb:FormBuilder) {}

  ngOnInit(): void {
    // this.customerService.getAllCustomers().subscribe((data) => {
    //   this.customers = data;
    // });
    this.formDetails();

  }

  // deleteCustomer(id: number): void {
  //   this.customerService.deleteCustomer(id).subscribe(() => {
  //     this.customers = this.customers.filter((customer) => customer.customerId != id);
  //   });
  // }

  // updateCustomer(customer: Customer): void {
  //   this.selectedCustomer = { ...customer };
  //   this.isEditMode = true;
  // }

  // saveUpdatedCustomer(): void {
  //   if (this.selectedCustomer) {
  //     this.customerService.updateCustomer(this.selectedCustomer.customerId, this.selectedCustomer)
  //       .subscribe((updatedCustomer) => {
  //         const index = this.customers.findIndex((cust) => cust.customerId === updatedCustomer.customerId);
  //         this.customers[index] = updatedCustomer;

  //         this.isEditMode = false;
  //         this.selectedCustomer = null;
  //       });
  //   }
  // }

  // cancelUpdate(): void {
  //   this.isEditMode = false;
  //   this.selectedCustomer = null;
  // }
  formDetails(){
    this.viewAccountsForm=this.fb.group({
      // typename:[''],
      name:[''],
      address:this.addressarray(),
      dateOfBirth:['']
    })
  }
  addressarray(){
    return this.fb.group({
      streetNumber:[''],
      postalCode:[''],
      city:[''],
      province:['']
    })
  }
  Show(){
    debugger
    this.customerdata=[];
    // let val=this.viewAccountsForm.controls.typename.value;
    let val = ''
    this.customerService.getusersdata(val).subscribe(res=>{
      this.customerdata=res;
    })
  }
  updatedetails(){
    debugger
    let data = this.viewAccountsForm.value;
    this.customerService.updatepersondetails(this.customerId,data).subscribe(res=>{
      console.log(res);
      this.cleardetails();
      this.Show();
    })
  }
  cleardetails(){
    this.viewAccountsForm.reset();
  }
  deletedetails(data){//take id here
    debugger
    this.customerService.deletesingleuser(data?.customerId).subscribe(res=>{
      console.log(res);
      this.Show();
    })
  }
  selecttype($event){
    debugger
    this.viewAccountsForm.controls.typename.setValue($event.target.value);
  }
  rowdetails(data){
    debugger
    this.customerId=data.customerId
    this.viewAccountsForm.controls.name.setValue(data.name);
    this.viewAccountsForm.controls.dateOfBirth.setValue(data.dateOfBirth);
    this.viewAccountsForm.controls.customerId.setValue(data.customerId);
    this.viewAccountsForm.controls['address']['streetNumber'].setValue(data.address.streetNumber);
    this.viewAccountsForm.controls['address']['postalCode'].setValue(data.address.postalCode);
    this.viewAccountsForm.controls['address']['.city'].setValue(data.address.city);
    this.viewAccountsForm.controls['address']['.province'].setValue(data.address.province);
  }
}
