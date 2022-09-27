import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Cart } from 'src/app/core/interfaces/cart';
import { CartService } from 'src/app/core/services/api/cart.service';
import { TransactionService } from 'src/app/core/services/api/transaction.service';

@Component({
  selector: 'cart',
  template: `
    <table>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th></th>
      </tr>
      <ng-container *ngFor="let post of (cart$ | async)?.posts">
        <tr class="cart-items">
          <td
          [routerLink]="['/post/' + post.id]"
          routerLinkActive="active"
          >
          {{ post.title }}
        </td>
          <td>{{ post.price | currency }}</td>
          <td>
            <a (click)="removeFromCart(post.id)">Remove From Cart</a>
          </td>
        </tr>
      </ng-container>
    </table>
    <div class="cart-info">
      <div class="cart-count">
        <p>Item Count: {{ (cart$ | async)?.itemCount }}</p>
        <p>|</p>
        <button (click)="clearCart()">Clear Cart</button>
      </div>
      <p>Total: {{ (cart$ | async)?.totalAmount | currency }}</p>
      <button (click)="checkoutCart()">Checkout Cart</button>
    </div>
  `
})
export class CartComponent implements OnInit {
  cart$!: Observable<Cart>;
  constructor(
    private _cartService: CartService,
    private _transactionService: TransactionService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.cart$ = this._cartService.getCart();
  }

  removeFromCart(postId: number) {
    this._cartService.removeFromCart(postId).pipe(take(1)).subscribe();
    this.ngOnInit();
  }

  clearCart() {
    this._cartService.clearCart().pipe(take(1)).subscribe();
    this.ngOnInit();
  }

  checkoutCart() {
    this._transactionService.addTransaction({}).pipe(take(1)).subscribe(
      {
        next: () => this._router.navigate(['/transactions'])
      }
    );
  }
}
