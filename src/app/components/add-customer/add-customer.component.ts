// import { CustomerService } from './../../services/customer.service';
import { NgFor } from '@angular/common';
import { Component, forwardRef, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
// import {Customer} from './../../models/customer';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { HttpClientModule } from '@angular/common/http';
// import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css',
  imports:[ReactiveFormsModule,NgFor],
  providers: [
    // HttpClientModule
  {provide: AddCustomerComponent, useExisting: forwardRef(() => AddCustomerComponent)}
  ],
  schemas: [NO_ERRORS_SCHEMA],
  standalone:true
})
export class AddCustomerComponent implements OnInit {
  // newCustomer: Customer = new Customer();
  AddnewCustomerForm:FormGroup;
  AddnewCustomerFormValidations:any={};
  customerdata:any;
  constructor(private fb:FormBuilder,private customerService:CustomerService){
  }
  ngOnInit(): void {
    this.FormDetails();
    console.log(this.AddnewCustomerForm)
  }
  // private customerService: CustomerService
  // addCustomer(): void{
  //   this.customerService.addCustomer(this.newCustomer)
  //   .subscribe((data)=>{
  //     alert('Customer added successfully!');

  //   });
  // }
  AddNewAccount(){
    debugger
  }
  FormDetails(){
    this.AddnewCustomerForm=this.fb.group({
      name:[''],
      address:this.addressarray(),
      dateOfBirth:['']
    });
    console.log('formgroup',this.AddnewCustomerForm)
  }
  addressarray(){
    return this.fb.group({
      streetNumber:[''],
      postalCode:[''],
      city:[''],
      province:['']
    })
  }
  savecustomerform(){
    debugger
    //let data = this.AddnewCustomerForm.value;
    // this.customerdata.push(this.AddnewCustomerForm.value);
    console.log('data',this.customerdata);
    // this.customerdata=[
    //   {
    //       "name": "sdf",
    //       "address": "sdfg",
    //       "streetNumber": "fdg",
    //       "postalCode": "gfg",
    //       "city": "sgs",
    //       "province": "fg",
    //       "dateOfBirth": "gsd"
    //   },
    //   {
    //       "name": "sdfg",
    //       "address": "sdfg",
    //       "streetNumber": "fdg",
    //       "postalCode": "gfg",
    //       "city": "sgs",
    //       "province": "fg",
    //       "dateOfBirth": "gsd"
    //   },
    //   {
    //       "name": "sdfr",
    //       "address": "sdfg",
    //       "streetNumber": "fdg",
    //       "postalCode": "gfg",
    //       "city": "sgs",
    //       "province": "fg",
    //       "dateOfBirth": "gsd"
    //   },
    //   {
    //       "name": "sdfw",
    //       "address": "sdfg",
    //       "streetNumber": "fdg",
    //       "postalCode": "gfg",
    //       "city": "sgs",
    //       "province": "fg",
    //       "dateOfBirth": "gsd"
    //   },
    //   {
    //       "name": "sdfo",
    //       "address": "sdfg",
    //       "streetNumber": "fdg",
    //       "postalCode": "gfg",
    //       "city": "sgs",
    //       "province": "fg",
    //       "dateOfBirth": "gsd"
    //   }
    // ]
    let data = JSON.stringify(this.AddnewCustomerForm.value);
    this.customerService.savecustomerdetails(data).subscribe(res=>{
      console.log('data',this.customerdata);
      this.customerdata=res;
    })

  }
  nameChange($event:any){
    debugger
    console.log('$event',$event)
  }
  //Validation Checking Methods Start
  //  checkValidations(group: FormGroup, isValid: boolean): boolean {
  //    try {
  //    Object.keys(group.controls).forEach((key: string) => {
  //    isValid = this.GetValidationByControl(group, key, isValid);
  //    })
  //    }
  //    catch (e) {
    
  //    this.showErrorMessage(e);
  //    return false;
  //    }
  //    return isValid;
  //    }
  //    GetValidationByControl(formGroup: FormGroup, key: string, isValid: boolean): boolean {
    
  //    try {
  //    let formcontrol;
  //   formcontrol = formGroup.get(key);
  //    if (formcontrol) {
  //    if (formcontrol instanceof FormGroup) {
  //    this.checkValidations(formcontrol, isValid)
  //    }
  //   else if (formcontrol.validator) {
  //    this.AddnewCustomerFormValidations[key] = '';
  //    if (formcontrol.errors || formcontrol.invalid || formcontrol.touched || formcontrol.dirty) {
  //    let lablename;
  //    let errormessage;
  //    for (const errorkey in formcontrol.errors) {
  //    if (errorkey) {
  //    lablename = (document.getElementById(key) as HTMLInputElement).title;
  //    errormessage = this.customerservice.getValidationMessage(formcontrol, errorkey, lablename, key, '');
  //   this.AddnewCustomerFormValidations[key] += errormessage + ' ';
  //   isValid = false;
  //    }
  //    }
  //    }
  //    }
  //    }
  //    }
  //    catch (e) {
  //    // this.showErrorMessage(e);
  //    return false;
  //    }
  //    return isValid;
  //    }
  //    showErrorMessage(errormsg: string) {
  //   //     this.customerservice.showErrorMessage(errormsg);
  //    }
  //    BlurEventAllControll(fromgroup: FormGroup) {
  //       try {
  //         Object.keys(fromgroup.controls).forEach((key: string) => {
  //           this.setBlurEvent(fromgroup, key);
  //         })
  //       }
  //       catch (e) {
  //         this.showErrorMessage(e);
  //         return false;
  //       }
  //    }
  //   setBlurEvent(fromgroup: FormGroup, key: string) {
  //       try {
  //         let formcontrol;
  //         formcontrol = fromgroup.get(key);
  //         if (formcontrol) {
  //           if (formcontrol instanceof FormGroup) {
  //             this.BlurEventAllControll(formcontrol)
  //           }
  //           else {
  //             if (formcontrol.validator)
  //               fromgroup.get(key).valueChanges.subscribe((data) => { this.GetValidationByControl(fromgroup, key, true) })
  //           }
  //         }
  //       }
  //       catch (e) {
  //         this.showErrorMessage(e);
  //         return false;
  //       }
  //   }
     //Validation Checking Methods End
    updatedetails($event,name){
      debugger
      let value=name;
      let tempdata:any=[];
      this.customerdata.forEach((res,index)=>{if(res.name==value){tempdata.push(this.customerdata[index])}});
      console.log('update details',tempdata);
      this.AddnewCustomerForm.controls.name.setValue(tempdata[0].name);
      this.AddnewCustomerForm.controls.address.setValue(tempdata[0].address);
      this.AddnewCustomerForm.controls.city.setValue(tempdata[0].city);
      this.AddnewCustomerForm.controls.province.setValue(tempdata[0].province);
      this.AddnewCustomerForm.controls.postalCode.setValue(tempdata[0].postalCode);
      this.AddnewCustomerForm.controls.streetNumber.setValue(tempdata[0].streetNumber);
      this.AddnewCustomerForm.controls.dateOfBirth.setValue(tempdata[0].dateOfBirth);
    }
    deletedetails(name){//take id here
      debugger
      this.customerService.deletesingleuser(name).subscribe(res=>{
        console.log('success')
      })
    }
}
