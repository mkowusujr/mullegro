import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot, // route trying to acess
    state: RouterStateSnapshot // current route
    ): boolean {
      if (this._authService.getToken()) // user is logged in
        return true;
        
        // user isnt logged in
        this._router.navigate(['/login']);
        return false;
    }
}
