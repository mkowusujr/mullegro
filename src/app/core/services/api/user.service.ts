import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = '/users';

  constructor(private _api: ApiService) {}

  login(loginForm: object): Observable<any> {
    const loginEndpoint = `${this.baseUrl}/login`;
    return this._api.postRequest(loginEndpoint, loginForm);
  }

  signup(user: object): Observable<any> {
    const signupEndpoint = `${this.baseUrl}/register`;
    return this._api.postRequest(signupEndpoint, user);
  }

  getLoggedInUserDetails(): Observable<User> {
    const userDetailsEndpoint = `${this.baseUrl}/user/details`;
    return this._api.getRequest(userDetailsEndpoint);
  }

  // get all
  // get one
  // remove acct
  // search
}
