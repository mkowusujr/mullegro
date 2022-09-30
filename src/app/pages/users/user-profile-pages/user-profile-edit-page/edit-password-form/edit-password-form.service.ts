import { Injectable, Input } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { User } from 'src/app/core/interfaces/user';
import { AbstractFormService } from 'src/app/core/services/abstract-form.service';
import { UserService } from 'src/app/core/services/api/user.service';
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
        newPassword: ['', [Validators.required]],
        confirmNewPassword: ['', [Validators.required]]
      });
    });
  }

  buildForm(): FormGroup<any> {
    return this.fb.group({
        currentPassword: ['', [Validators.required]],
        newPassword: ['', [Validators.required]],
        confirmNewPassword: ['', [Validators.required]]
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
