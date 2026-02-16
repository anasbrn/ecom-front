import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  routes: Route[] = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.routes = this.router.config.filter(route =>
      route.path && route.path !== ''
    );
  }
}
