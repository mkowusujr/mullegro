import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ICart } from 'src/app/core/interfaces/cart';
import { CartService } from 'src/app/core/services/api/cart.service';
import { TransactionService } from 'src/app/core/services/api/transaction.service';

@Component({
  selector: 'cart',
  template: `
    <div class="cart-container">
      <table>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th></th>
        </tr>
        <ng-container *ngFor="let post of (cart$ | async)?.posts">
          <tr class="cart-items">
            <td [routerLink]="['/post/' + post.id]" routerLinkActive="active">
              {{ post.title }}
            </td>
            <td>{{ post.price | currency }}</td>
            <td (click)="removeFromCart(post.id ?? -1)">
              <a>Remove From Cart</a>
            </td>
          </tr>
        </ng-container>
      </table>
      <div class="cart-info">
        <div class="cart-count">
          <p>Item Count: {{ (cart$ | async)?.itemCount }}</p>
          <p>|</p>
          <button
            (click)="clearCart()"
            [disabled]="(cart$ | async)?.posts?.length == 0"
          >
            Clear Cart
          </button>
        </div>
        <p>Total: {{ (cart$ | async)?.totalAmount | currency }}</p>
        <button
          (click)="checkoutCart()"
          [disabled]="(cart$ | async)?.posts?.length == 0"
        >
          Checkout Cart
        </button>
      </div>
    </div>
  `
})
export class CartComponent implements OnInit, OnDestroy {
  cart$!: Observable<ICart>;
  componentIsBeingDestroyedNotifier = new Subject<void>();

  constructor(
    private _cartService: CartService,
    private _transactionService: TransactionService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.cart$ = this._cartService.getCart();
  }

  removeFromCart(postId: number) {
    this._cartService
      .removeFromCart(postId)
      .pipe(takeUntil(this.componentIsBeingDestroyedNotifier))
      .subscribe();
    this.ngOnInit();
  }

  clearCart() {
    this._cartService
      .clearCart()
      .pipe(takeUntil(this.componentIsBeingDestroyedNotifier))
      .subscribe();
    this.cart$ = this._cartService.getCart();
  }

  checkoutCart() {
    this._transactionService
      .addTransaction({})
      .pipe(takeUntil(this.componentIsBeingDestroyedNotifier))
      .subscribe({
        next: () => this._router.navigate(['/user/transactions'])
      });
  }

  ngOnDestroy(): void {
    this.componentIsBeingDestroyedNotifier.next();
    this.componentIsBeingDestroyedNotifier.complete();
  }
}
