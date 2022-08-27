import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private _currentUser: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  currentUser$: Observable<User | null> = this._currentUser.asObservable();

  constructor(private _router: Router) {}

  private saveJwtToken(value: string) {
    const key = 'jwt';
    localStorage.setItem(key, value);
  }

  private getJwtToken(): string | null {
    return localStorage.getItem('jwt');
  }

  private clearJwtToken() {
    localStorage.clear();
  }

  private doesJwtExist(): boolean {
    return this.getJwtToken() != null;
  }

  login(serverResponse: any) {
    console.log(serverResponse);
    if (!serverResponse.status) {
      this.saveJwtToken(serverResponse.token);
      this._currentUser.next(serverResponse.data);
      this._router.navigate(['']);
    }
  }

  loggout() {
    this.clearJwtToken();
    this._currentUser.next(null);
    this._router.navigate(['']);
  }

  isSignedIn(): boolean {
    return this.doesJwtExist();
  }
}
