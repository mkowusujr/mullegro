import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

import { Cart } from '../../interfaces/cart';
import { Post } from '../../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = '/cart';

  constructor(private _api: ApiService) {}

  getCart(): Observable<Cart> {
    let getCartItemsEndpoint = `${this.baseUrl}`;
    return this._api.getRequest(getCartItemsEndpoint);
  }

  addToCart(post: Post | null) {
    let addToCartEndpoint = `${this.baseUrl}`;
    return this._api.postRequest(addToCartEndpoint, post);
  }

  removeFromCart(postId: number) {
    let removeFromCartEndpoint = `${this.baseUrl}/post/${postId}`;
    return this._api.deleteRequest(removeFromCartEndpoint);
  }

  clearCart() {
    let clearCartEndpoint = `${this.baseUrl}`;
    return this._api.deleteRequest(clearCartEndpoint);
  }
}
