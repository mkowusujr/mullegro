import { Component, Input } from '@angular/core';
import { Post } from 'src/app/core/interfaces/post';
import { CartService } from 'src/app/core/services/api/cart.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'post-add-to-cart',
  template: ` <button (click)="addToCart()">Add to Cart</button> `,
  styles: []
})
export class AddToCartComponent {
  @Input() post!: Post | null;

  constructor(private _cartService: CartService, private _router: Router) {}

  addToCart() {
    this._cartService
      .addToCart(this.post)
      .pipe(take(1))
      .subscribe({ 
        next: _ => {this._router.navigate(['/cart'])},
        error: _ => {this._router.navigate(['/login'])} 
      });
  }
}
