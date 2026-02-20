import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from './ui/customer/customer.component';
import {ProductComponent} from './ui/product/product.component';
import {AuthGuard} from './auth/auth-guard-guard';

const routes: Routes = [
  {
    path: "customers",
    component: CustomerComponent,
    data: {label: 'Customers', role: 'ADMIN'},
    canActivate: [AuthGuard]
  },
  {path: "products", component: ProductComponent, data: {label: 'Products'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
