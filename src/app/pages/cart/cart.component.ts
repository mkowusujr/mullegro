import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Post } from 'src/app/core/interfaces/post';
import { CartService } from 'src/app/core/services/api/cart.service';

@Component({
  selector: 'cart',
  template: `
    <ng-container *ngFor="let post of (cartItems$ | async)">
      <div>
        {{post.title}}
        {{post.price}}
        <button (click)="removeFromCart(post.id)">Remove from Cart</button>
      </div>
    </ng-container>
    <button (click)="clearCart()">Clear Cart</button>
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

  removeFromCart(postId: number) {
    this._cartService.removeFromCart(postId).pipe(take(1)).subscribe();
  }

  clearCart() {
    this._cartService.clearCart().pipe(take(1)).subscribe();
  }

}
