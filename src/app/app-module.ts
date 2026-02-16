import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './layouts/navbar/navbar';
import { CustomerComponent } from './ui/customer/customer.component';
import { ProductComponent } from './ui/product/product.component';
import {provideHttpClient} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    App,
    Navbar,
    CustomerComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
