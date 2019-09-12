import { Component, OnInit } from '@angular/core';
import { CartService }       from '../cart.service';
import { ActivatedRoute  }     from '@angular/router';
import { PROD }              from '../products';

@Component({
  selector: 'app-product-details',
  template: `
  <h2>PROD Details</h2>
  <div *ngIf="PROD">
  <h3>{{ PROD.name }}</h3>
  <h4>{{ PROD.price | currency }}</h4>
  <p>{{ PROD.description }}</p>

  <button (click)="addToCart(PROD)">Buy</button>
  </div>
  `
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute , private cartService: CartService)
  {

  }

  addToCart(PROD)
  {
    window.alert('');
    this.cartService.addToCart(PROD);
  }

  ngOnInit() {
  }

}
