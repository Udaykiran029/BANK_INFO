import { Routes } from '@angular/router';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ViewAccountsComponent } from './components/view-accounts/view-accounts.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { NavigationComponent } from './navigation/navigation.component';

export const routes: Routes = [
  { path: '', component: NavigationComponent },
    { path: 'customers', component: ViewCustomersComponent },
  { path: 'addcustomer', component: AddCustomerComponent },
  { path: 'accounts', component: ViewAccountsComponent },
  { path: 'addaccount', component: AddAccountComponent },
];
