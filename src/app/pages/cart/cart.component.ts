import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Post } from 'src/app/core/interfaces/post';
import { CartService } from 'src/app/core/services/api/cart.service';
import { TransactionService } from 'src/app/core/services/api/transaction.service';

@Component({
  selector: 'cart',
  template: `
    <ng-container *ngFor="let post of cartItems$ | async">
      <div class="cart-items">
        <tr>
          <td>{{ post.title }}</td>
          <td>{{ post.price | currency }}</td>
          <td>
            <button (click)="removeFromCart(post.id)">Remove from Cart</button>
          </td>
        </tr>
      </div>
    </ng-container>
    <button (click)="checkoutCart()">Checkout Cart</button>
    <button (click)="clearCart()">Clear Cart</button>
  `,
  styles: []
})
export class CartComponent implements OnInit {
  cartItems$!: Observable<Post[]>;
  constructor(
    private _cartService: CartService,
    private _transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.cartItems$ = this._cartService.getCartItems();
  }

  removeFromCart(postId: number) {
    this._cartService.removeFromCart(postId).pipe(take(1)).subscribe();
  }

  clearCart() {
    this._cartService.clearCart().pipe(take(1)).subscribe();
  }

  checkoutCart() {
    this._transactionService.addTransaction({}).pipe(take(1)).subscribe();
  }
}
