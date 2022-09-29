import { Component, OnInit } from '@angular/core';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { LoginFormService } from './login-form.service';

@Component({
  selector: 'login',
  providers: [LoginFormService],
  template: `
    <h2>Welcome Back To Mullegro</h2>
    <form [formGroup]="loginFormService.form" (ngSubmit)="onSubmit()">
      <label for="#emailOrUsername">Email or Username</label>
      <input #emailOrUsername type="text" formControlName="emailOrUsername" />

      <label for="#password">Pasword</label>
      <input #password type="password" formControlName="password" />

      <input type="submit" value="Login" [disabled]="!loginFormService.valid" />
    </form>
    <div class="auth-footer">
      <p>Don't have a Mullegro Account?</p>
      <a [routerLink]="['/signup']" routerLinkActive="active">Sign Up Here</a>
    </div>
  `
})
export class LoginComponent implements OnInit {
  constructor(
    public loginFormService: LoginFormService,
    private _authState: AuthStateService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loginFormService.submitForm();
  }

  logout = () => this._authState.loggout();
}
