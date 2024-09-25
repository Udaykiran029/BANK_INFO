import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ViewAccountsComponent } from './components/view-accounts/view-accounts.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'customers', component: ViewCustomersComponent },
  { path: 'addcustomer', component: AddCustomerComponent },
  { path: 'accounts', component: ViewAccountsComponent },
  { path: 'add-account', component: AddAccountComponent },
  //{ path: '', redirectTo: '/customers', pathMatch: 'full' }, // Default route
  //{ path: '**', redirectTo: '/customers' }, // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule,FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
