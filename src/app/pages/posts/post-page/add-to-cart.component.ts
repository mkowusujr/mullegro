import { Component, Input, OnDestroy } from '@angular/core';
import { IPost } from 'src/app/core/interfaces/post';
import { CartService } from 'src/app/core/services/api/cart.service';
import { Subject, take, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'post-add-to-cart',
  template: ` <button (click)="addToCart()">Add to Cart</button> `,
  styles: []
})
export class AddToCartComponent implements OnDestroy {
  @Input() post!: IPost | null;
  componentIsBeingDestroyedNotifier = new Subject<void>();

  constructor(private _cartService: CartService, private _router: Router) {}

  addToCart() {
    this._cartService
      .addToCart(this.post)
      .pipe(takeUntil(this.componentIsBeingDestroyedNotifier))
      .subscribe({
        next: _ => {
          this._router.navigate(['/cart']);
        },
        error: _ => {
          this._router.navigate(['/login']);
        }
      });
  }

  ngOnDestroy(): void {
    this.componentIsBeingDestroyedNotifier.next();
    this.componentIsBeingDestroyedNotifier.complete();
  }
}
