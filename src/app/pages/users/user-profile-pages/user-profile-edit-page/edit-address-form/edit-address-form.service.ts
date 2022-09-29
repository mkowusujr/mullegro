import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { User } from 'src/app/core/interfaces/user';
import { AbstractFormService } from 'src/app/core/services/abstract-form.service';
import { UserService } from 'src/app/core/services/api/user.service';
import { addressForm } from '../edit-forms';

@Injectable({
  providedIn: 'root'
})
export class EditAddressFormService extends AbstractFormService<addressForm> {
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
        address: [currentUser?.address, [Validators.required]]
      });
    });
  }

  buildForm(): FormGroup<any> {
    return this.fb.group({
        address: ['']
    });
  }

  get address(): string | null {
    return this.form.value.address;
  }

  submitForm(): void {
    if (this.currentUser) {
      this.currentUser.address = this.address ?? '';
      this._userService
        .updateCurrentUserDetails(this.currentUser)
        .pipe(take(1))
        .subscribe();
      this._authState.refreshDetails();
    }
  }
}
