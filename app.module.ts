import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RBComponent } from './rb/rb.component';
import { F3CAComponent } from './f3-ca/f3-ca.component';
import { F5PpcComponent } from './f5-ppc/f5-ppc.component';
import { F7CcmsComponent } from './f7-ccms/f7-ccms.component';
import { F11InvoiceComponent } from './f11-invoice/f11-invoice.component';
import { F13LubeComponent } from './f13-lube/f13-lube.component';
import { F15LpgComponent } from './f15-lpg/f15-lpg.component';
import { F17SalaryComponent } from './f17-salary/f17-salary.component';
import { F19ShortComponent } from './f19-short/f19-short.component';
import { F21ExpenseComponent } from './f21-expense/f21-expense.component';
import { F23MonthlyComponent } from './f23-monthly/f23-monthly.component';
import { F9TestComponent } from './f9-test/f9-test.component';
import { F25SalesComponent } from './f25-sales/f25-sales.component';
import { F33PfComponent } from './f33-pf/f33-pf.component';
import { F35SalesComponent } from './f35-sales/f35-sales.component';
import { F37Component } from './f37/f37.component';

@NgModule({
  declarations: [
    AppComponent,
    RBComponent,
    F3CAComponent,
    F5PpcComponent,
    F7CcmsComponent,
    F11InvoiceComponent,
    F13LubeComponent,
    F15LpgComponent,
    F17SalaryComponent,
    F19ShortComponent,
    F21ExpenseComponent,
    F23MonthlyComponent,
    F9TestComponent,
    F25SalesComponent,
    F33PfComponent,
    F35SalesComponent,
    F37Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
