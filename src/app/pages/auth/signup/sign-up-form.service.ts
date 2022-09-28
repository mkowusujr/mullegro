import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';

import { AbstractFormService } from 'src/app/core/services/abstract-form.service';
import { UserService } from 'src/app/core/services/api/user.service';
import { User } from 'src/app/core/interfaces/user';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpFormService extends AbstractFormService<User> {
  constructor(
    protected override fb: FormBuilder,
    private _userService: UserService,
    private _authState: AuthStateService
  ) {
    super(fb);
  }

  buildForm(): FormGroup<any> {
    return this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]]
    });
  }

  submitForm() {
    this._userService
      .signup(this.getFormValue())
      .pipe(take(1))
      .subscribe(serverResponse => this._authState.login(serverResponse));
  }
}
