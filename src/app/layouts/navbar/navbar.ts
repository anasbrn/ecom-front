import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';
import {KeycloakProfile} from 'keycloak-js';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  routes: Route[] = [];
  protected user: KeycloakProfile = {};
  protected isLoggedIn: boolean = false;

  constructor(private router: Router, private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
    this.initRoutes();
    this.loadUserProfile()
    this.isLoggedIn = this.keycloakService.isLoggedIn()
  }

  protected logout() {
    this.keycloakService.logout();
  }

  protected login() {
    this.keycloakService.login();
  }

  private initRoutes() {
    this.routes = this.router.config.filter(route =>
      route.path && route.path !== ''
    );
  }

  private async loadUserProfile() {
    this.user = await this.keycloakService.loadUserProfile();
  }
}
