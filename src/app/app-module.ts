import {APP_INITIALIZER, NgModule, provideBrowserGlobalErrorListeners} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing-module';
import {App} from './app';
import {Navbar} from './layouts/navbar/navbar';
import {CustomerComponent} from './ui/customer/customer.component';
import {ProductComponent} from './ui/product/product.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {
  KeycloakAngularModule, KeycloakBearerInterceptor,
  KeycloakService
} from 'keycloak-angular';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8180',
        realm: 'learn',
        clientId: 'ecom_microservice',
      },
      initOptions: {
        onLoad: 'login-required',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
      },
    });
}

@NgModule({
  declarations: [
    App,
    Navbar,
    CustomerComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    KeycloakAngularModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [App]
})
export class AppModule {
}
