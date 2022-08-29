import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = '/users';

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

  getAllUsers(): Observable<User[]> {
    const getAllUsersEndpoint = `${this.baseUrl}/user`;
    return this._api.getRequest(getAllUsersEndpoint);
  }

  getUser(username: string): Observable<User> {
    const getUserEndpoint = `${this.baseUrl}/user/${username}`;
    return this._api.getRequest(getUserEndpoint);
  }

  deleteAccount(username: string): Observable<any> {
    const deleteAccountEndpoint = `${this.baseUrl}/user/${username}`;
    return this._api.deleteRequest(deleteAccountEndpoint);
  }

  getAllFilteredUsers(filter: string): Observable<User[]> {
    const getAllFilteredUsersEndpoint = `${this.baseUrl}/user/search?query=${filter}`;
    return this._api.getRequest(getAllFilteredUsersEndpoint);
  }
}
