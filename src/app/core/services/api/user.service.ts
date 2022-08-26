import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  // register
  // login
  // get all
  // get one
  // remove acct
  // search
}
