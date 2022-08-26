import { Component, OnInit } from '@angular/core';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { LoginFormService } from './login-form.service';

@Component({
  providers: [LoginFormService],
  template: `
    <div class="login-page">
      <h2>Welcome Back To Mullegro</h2>
      <form
        [formGroup]="loginFormService.form"
        (ngSubmit)="onSubmit()"
        novalidate
      >
        <label for="#emailOrUsername">Email or Username</label>
        <input #emailOrUsername type="text" formControlName="emailOrUsername" />
        <label for="#password">Pasword</label>
        <input #password type="password" formControlName="password" />
        <input
          type="submit"
          value="Login"
          [disabled]="!loginFormService.valid"
        />
      </form>
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
    this.loginFormService.submit().subscribe(res => {
      this._authState.login(res);
    });
  }

  logout = () => this._authState.loggout();
}
