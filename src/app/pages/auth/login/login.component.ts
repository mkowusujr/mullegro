import { Component } from '@angular/core';
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
export class LoginComponent {
  constructor(public loginFormService: LoginFormService) {}

  onSubmit() {
    this.loginFormService.submitForm();
  }
}
