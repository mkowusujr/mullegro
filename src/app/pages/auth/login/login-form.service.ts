import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';

import { AbstractFormService } from 'src/app/core/services/abstract-form.service';
import { LoginForm } from './login-form';
import { UserService } from 'src/app/core/services/api/user.service';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService extends AbstractFormService<LoginForm> {
  constructor(
    protected override fb: FormBuilder,
    private _userService: UserService,
    private _authState: AuthStateService
  ) {
    super(fb);
  }

  buildForm(): FormGroup<any> {
    return this.fb.group({
      emailOrUsername: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  submitForm() {
    this._userService
      .login(this.getFormValue())
      .pipe(take(1))
      .subscribe(serverResponse => this._authState.login(serverResponse));
  }
}
