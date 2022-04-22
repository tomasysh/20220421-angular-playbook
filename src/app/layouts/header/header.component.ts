import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routeLinks = [
    {
      label: 'Products',
      route: '/products'
    },
    {
      label: 'Cart',
      route: '/cart'
    }
  ];

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
