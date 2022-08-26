import { Component, OnInit } from '@angular/core';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { SignUpFormService } from './sign-up-form.service';

@Component({
  providers: [SignUpFormService],
  template: `
    <div class="sign-up-page">
      <h2>Sign Up For Mullegro</h2>
      <form [formGroup]="signUpFormService.form" (ngSubmit)="onSubmit()">
        <label for="#name">Name</label>
        <input #name type="text" formControlName="name" />

        <label for="#username">Username</label>
        <input #username type="text" formControlName="username" />

        <label for="#email">Email</label>
        <input #email type="email" formControlName="email" />

        <label for="#address">Address</label>
        <input #address type="text" formControlName="address" />

        <label for="#password">Pasword</label>
        <input #password type="password" formControlName="password" />

        <label for="#password2">Confirm Pasword</label>
        <input #password2 type="password" formControlName="password2" />

        <input
          type="submit"
          value="Login"
          [disabled]="!signUpFormService.valid"
        />
      </form>
    </div>
  `
})
export class SignUpComponent implements OnInit {
  constructor(
    public signUpFormService: SignUpFormService,
    private _authState: AuthStateService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.signUpFormService.submit().subscribe(res => {
      this._authState.login(res);
    });
  }
}
