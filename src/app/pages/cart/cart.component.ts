import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/interfaces/post';
import { CartService } from 'src/app/core/services/api/cart.service';

@Component({
  selector: 'cart',
  template: `
    <ng-container *ngFor="let post of (cartItems$ | async)">
      <div>
        {{post.title}}
        {{post.price}}
      </div>
    </ng-container>
  `,
  styles: [
  ]
})
export class CartComponent implements OnInit {
  cartItems$!: Observable<Post[]>;
  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems$ = this._cartService.getCartItems()
  }

}
