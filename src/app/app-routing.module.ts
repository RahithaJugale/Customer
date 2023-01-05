import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerManageListComponent } from './customer/customer-manage-list/customer-manage-list.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'customer', component: CustomerComponent},
  { path: 'customer-add', component: CustomerAddComponent},
  { path: 'customer-list', component: CustomerListComponent},
  { path: 'customer-manage-list', component: CustomerManageListComponent},
  { path: 'login', component: LoginComponent},
  { path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
