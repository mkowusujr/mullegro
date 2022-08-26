import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { LoginFormService } from './login-form.service';

@Component({
  selector: 'app-login',
  providers: [LoginFormService],
  template: `
    <div class="login-page">
      <h2>Welcome Back To Mullegro</h2>
      <form [formGroup]="loginFormService.form" (ngSubmit)="onSubmit()" novalidate>
        <label for="#emailOrUsername">Email or Username</label>
        <input #emailOrUsername type="text" formControlName="emailOrUsername" />
        <label for="#password">Pasword</label>
        <input #password type="password" formControlName="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  `
})
export class LoginComponent implements OnInit {
  constructor(
    public loginFormService: LoginFormService,
    private _auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loginFormService.submit().subscribe();
  }

  logout() {
    this._auth.clearJwtToken();
    this._router.navigate(['']);
  }
}
