import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/user';
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

  getCurrentUserDetails(): Observable<IUser> {
    const userDetailsEndpoint = `${this.baseUrl}/user/details`;
    return this._api.getRequest(userDetailsEndpoint);
  }

  updateCurrentUserDetails(
    updatedCurrentUserDetails: IUser
  ): Observable<IUser> {
    const updateCurrentUserDetailsEndpoint = `${this.baseUrl}/user`;
    return this._api.putRequest(
      updateCurrentUserDetailsEndpoint,
      updatedCurrentUserDetails
    );
  }

  getAllUsers(): Observable<IUser[]> {
    const getAllUsersEndpoint = `${this.baseUrl}`;
    return this._api.getRequest(getAllUsersEndpoint);
  }

  getUser(username: string): Observable<IUser> {
    const getUserEndpoint = `${this.baseUrl}/user/${username}`;
    return this._api.getRequest(getUserEndpoint);
  }

  getUserById(id: number): Observable<IUser> {
    const getUserEndpoint = `${this.baseUrl}/user/byId/${id}`;
    return this._api.getRequest(getUserEndpoint);
  }

  deleteAccount(username: string): Observable<any> {
    const deleteAccountEndpoint = `${this.baseUrl}/user/${username}`;
    return this._api.deleteRequest(deleteAccountEndpoint);
  }

  findUsersWithSearchQuery(filter: string): Observable<IUser[]> {
    const findUsersWithSearchQueryEndpoint = `${this.baseUrl}/search?query=${filter}`;
    return this._api.getRequest(findUsersWithSearchQueryEndpoint);
  }
}
