import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthJwtService } from './auth-jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  constructor(private _jwt: AuthJwtService, private _router: Router) {}

  login(res: any) {
    console.log(res);
    if (!res.status) {
      this._jwt.saveJwtToken(res.token);
      this._router.navigate(['']);
    }
  }

  loggout() {
    this._jwt.clearJwtToken();
    this._router.navigate(['']);
  }

  isSignedIn(): boolean {
    return this._jwt.doesJwtExist();
  }
}
