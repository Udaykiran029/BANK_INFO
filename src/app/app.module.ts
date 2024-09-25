import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ViewAccountsComponent } from './components/view-accounts/view-accounts.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ViewCustomersComponent,
    AddCustomerComponent,
    ViewAccountsComponent,
    AddAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([]) ,
    // FormsModule,
    // HttpClientModule,
    // HttpClient,
    RouterLink,
    RouterOutlet,
    RouterModule,
    BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot(),
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
