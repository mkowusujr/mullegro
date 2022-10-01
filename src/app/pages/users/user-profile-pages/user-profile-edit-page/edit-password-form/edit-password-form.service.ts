import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';

import { AbstractFormService } from 'src/app/core/services/abstract-form.service';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { UserService } from 'src/app/core/services/api/user.service';
import { PasswordValidationService } from 'src/app/core/services/password-validation.service';

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
    private _userService: UserService,
    private PasswordValidation: PasswordValidationService
  ) {
    super(fb);
    _authState.currentUser$.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.rebuildForm()
    });
  }

  buildForm(): FormGroup<any> {
    return this.fb.group({});
  }

  rebuildForm() {
    this.form = this.fb.group({
        password: [
          null,
          [
            Validators.required,
            Validators.minLength(8),
            this.PasswordValidation.passwordStrength()
          ]
        ],
        confirmPassword: [
          null,
          [
            Validators.required,
            Validators.minLength(8),
            this.PasswordValidation.passwordStrength(),
            this.PasswordValidation.newPasswordMatches()
          ]
        ]
      });
  }

  get confirmPassword() {
    return this.form.value.confirmPassword;
  }

  submitForm(): void {
    if (this.currentUser) {
      this.currentUser.password = this.confirmPassword;
      this._userService
        .updateCurrentUserDetails(this.currentUser)
        .pipe(take(1))
        .subscribe();
      this._authState.refreshDetails();
    }
  }
}
