import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { IUser } from '../interfaces/user';
import { UserService } from '../services/api/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private _currentUser: BehaviorSubject<IUser | undefined> = new BehaviorSubject<
    IUser | undefined
  >(undefined);
  currentUser$: Observable<IUser | undefined> = this._currentUser.asObservable();

  constructor(private _router: Router, private _userService: UserService) {
    this._userService
      .getCurrentUserDetails()
      .pipe(take(1))
      .subscribe(serverResponse => this._currentUser.next(serverResponse));
  }

  private saveJwtToken(value: string) {
    const key = 'jwt';
    localStorage.setItem(key, value);
  }

  public getJwtToken(): string | null {
    return localStorage.getItem('jwt');
  }

  private clearJwtToken() {
    localStorage.clear();
  }

  private doesJwtExist(): boolean {
    return this.getJwtToken() != null;
  }

  public login(serverResponse: any) {
    console.log(serverResponse);
    if (!serverResponse.status) {
      this.saveJwtToken(serverResponse.token);
      this._currentUser.next(serverResponse.data);
      this._router.navigate(['']);
    }
  }

  public loggout() {
    this.clearJwtToken();
    this._currentUser.next(undefined);
    this._router.navigate(['']);
  }

  public isSignedIn(): boolean {
    return this.doesJwtExist();
  }

  public refreshDetails() {
    this._userService
      .getCurrentUserDetails()
      .pipe(take(1))
      .subscribe(serverResponse => this._currentUser.next(serverResponse));
  }
}
