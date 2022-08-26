import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _auth: AuthService) { }

  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this._auth.getJwtToken();
    if (token)
        authReq = req.clone({
            headers: req.headers.set('Authorization', token)
        })
    return next.handle(authReq)
  }
}
