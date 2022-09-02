import { Injectable } from '@angular/core';
import { Post } from '../../interfaces/post';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = '/cart';

  constructor(private _api: ApiService) { }

  getCartItems() {
    let getCartItemsEndpoint = `${this.baseUrl}`;
    this._api.getRequest(getCartItemsEndpoint);
  }

  addToCart(post: Post) {
    let addToCartEndpoint = `${this.baseUrl}`;
    this._api.postRequest(addToCartEndpoint, post);
  }

  removeFromCart(postId: number) {
    let removeFromCartEndpoint = `${this.baseUrl}/${postId}`;
    this._api.deleteRequest(removeFromCartEndpoint);
  }

  clearCart() {
    let clearCartEndpoint = `${this.baseUrl}`;
    this._api.deleteRequest(clearCartEndpoint);
  }
}
