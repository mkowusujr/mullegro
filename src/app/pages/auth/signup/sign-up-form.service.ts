import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';

import { AbstractFormService } from 'src/app/core/services/abstract-form.service';
import { UserService } from 'src/app/core/services/api/user.service';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { PasswordValidationService } from 'src/app/core/services/password-validation.service';

import { User } from 'src/app/core/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class SignUpFormService extends AbstractFormService<User> {
  constructor(
    protected override fb: FormBuilder,
    private _userService: UserService,
    private _authState: AuthStateService,
    private PasswordValidation: PasswordValidationService
  ) {
    super(fb);
    this.rebuildForm();
  }

  buildForm(): FormGroup<any> {
    return this.fb.group({});
  }

  rebuildForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          this.PasswordValidation.passwordStrength()
        ]
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          this.PasswordValidation.passwordStrength(),
          this.PasswordValidation.newPasswordMatches()
        ]
      ]
    });
  }

  submitForm() {
    this._userService
      .signup(this.getFormValue())
      .pipe(take(1))
      .subscribe(serverResponse => this._authState.login(serverResponse));
  }
}
