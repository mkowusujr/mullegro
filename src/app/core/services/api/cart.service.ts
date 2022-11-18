import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

import { ICart } from '../../interfaces/cart';
import { IPost } from '../../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = '/cart';

  constructor(private _api: ApiService) {}

  getCart(): Observable<ICart> {
    let getCartItemsEndpoint = `${this.baseUrl}`;
    return this._api.getRequest(getCartItemsEndpoint);
  }

  addToCart(post: IPost | null) {
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
