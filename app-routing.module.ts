import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RBComponent } from '../app/rb/rb.component';
import {  F3CAComponent} from '../app/f3-ca/f3-ca.component';
import {  F5PpcComponent} from '../app/f5-ppc/f5-ppc.component';
import {  F7CcmsComponent} from '../app/f7-ccms/f7-ccms.component';
import {  F11InvoiceComponent } from '../app/f11-invoice/f11-invoice.component';
import {  F13LubeComponent } from '../app/f13-lube/f13-lube.component';
import {  F15LpgComponent } from '../app/f15-lpg/f15-lpg.component';
import {  F17SalaryComponent } from '../app/f17-salary/f17-salary.component';
import {  F19ShortComponent } from '../app/f19-short/f19-short.component';
import {  F21ExpenseComponent } from '../app/f21-expense/f21-expense.component';
import {  F23MonthlyComponent } from '../app/f23-monthly/f23-monthly.component';
import {  F9TestComponent } from '../app/f9-test/f9-test.component';
import {  F25SalesComponent } from '../app/f25-sales/f25-sales.component';
import {  F33PfComponent } from '../app/f33-pf/f33-pf.component';
import {  F35SalesComponent } from '../app/f35-sales/f35-sales.component';
import {  F37Component } from '../app/f37/f37.component';

F37Component
const routes: Routes = [
  { path: 'rb', component:RBComponent },
  { path: 'f3-ca', component: F3CAComponent},
  { path: 'f5-ppc', component: F5PpcComponent},
  { path: 'f7-ccms', component: F7CcmsComponent},
  { path: 'f11-invoice', component: F11InvoiceComponent},
  { path: 'f13-lube', component: F13LubeComponent},
  { path: 'f15-lpg', component: F15LpgComponent },
  { path: 'f17-salary', component: F17SalaryComponent },
  { path: 'f19-short', component: F19ShortComponent },
  { path: 'f21-expense', component: F21ExpenseComponent },
  { path: 'f23-monthly', component: F23MonthlyComponent },
  { path: 'f9-test', component: F9TestComponent },
  { path: 'f25-sales', component:  F25SalesComponent },
  { path: 'f33-pf', component:  F33PfComponent },
  { path: 'f35-sales', component:  F35SalesComponent },
  { path: 'f37', component:  F37Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
