import { Injectable, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { IUser } from 'src/app/core/interfaces/user';
import { AbstractFormService } from 'src/app/core/services/abstract-form.service';
import { UserService } from 'src/app/core/services/api/user.service';
import { emailForm } from '../edit-forms';

@Injectable({
  providedIn: 'root'
})
export class EditEmailFormService extends AbstractFormService<emailForm> {
  currentUser!: IUser | undefined;

  constructor(
    protected override fb: FormBuilder,
    private _authState: AuthStateService,
    private _userService: UserService
  ) {
    super(fb);
    _authState.currentUser$.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.rebuildForm();
    });
  }

  buildForm(): FormGroup<any> {
    return this.fb.group({});
  }

  rebuildForm() {
    this.form = this.fb.group({
      currentEmail: [],
      newEmail: []
    });
  }

  get newEmail() {
    return this.form.value.newEmail;
  }

  submitForm(): void {
    if (this.currentUser) {
      this.currentUser.email = this.newEmail;
      this._userService
        .updateCurrentUserDetails(this.currentUser)
        .pipe(take(1))
        .subscribe();
      this._authState.refreshDetails();
    }
  }
}
