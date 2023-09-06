import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Sidebar',
  templateUrl: './Sidebar.component.html',
  styleUrls: ['./Sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  routes: any = [
    {
      routeUrl: "/",
      routeName : "Dashboard",
      routeIcons : "bx-grid-alt"
    },
    {
      routeUrl: "/login",
      routeName : "Login",
      routeIcons : "bx-grid-alt"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
