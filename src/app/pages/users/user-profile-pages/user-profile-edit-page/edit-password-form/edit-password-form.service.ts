import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';

import { AbstractFormService } from 'src/app/core/services/abstract-form.service';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { UserService } from 'src/app/core/services/api/user.service';

import { PasswordValidation } from 'src/app/core/validators/password-validation';

import { User } from 'src/app/core/interfaces/user';
import { passwordForm } from '../edit-forms';

@Injectable({
  providedIn: 'root'
})
export class EditPasswordFormService extends AbstractFormService<passwordForm> {
  currentUser!: User | undefined;

  constructor(
    protected override fb: FormBuilder,
    private _authState: AuthStateService,
    private _userService: UserService
  ) {
    super(fb);
    _authState.currentUser$.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.form = this.fb.group({
        currentPassword: ['', [Validators.required]],
        password: [
          null,
          [
            Validators.required,
            Validators.minLength(8),
            PasswordValidation.passwordStrength()
          ]
        ],
        confirmPassword: [
          null,
          [
            Validators.required,
            Validators.minLength(8),
            PasswordValidation.passwordStrength(),
            PasswordValidation.newPasswordMatches()
          ]
        ]
      });
    });
  }

  buildForm(): FormGroup<any> {
    return this.fb.group({
      currentPassword: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          PasswordValidation.passwordStrength()
        ]
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          PasswordValidation.passwordStrength(),
          PasswordValidation.newPasswordMatches()
        ]
      ]
    });
  }

  get confirmNewPassword() {
    return this.form.value.confirmNewPassword;
  }

  submitForm(): void {
    if (this.currentUser) {
      this.currentUser.password = this.confirmNewPassword;
      this._userService
        .updateCurrentUserDetails(this.currentUser)
        .pipe(take(1))
        .subscribe();
      this._authState.refreshDetails();
    }
  }
}
