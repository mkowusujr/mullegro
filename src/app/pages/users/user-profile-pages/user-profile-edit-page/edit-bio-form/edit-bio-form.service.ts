import { Injectable, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { User } from 'src/app/core/interfaces/user';
import { AbstractFormService } from 'src/app/core/services/abstract-form.service';
import { UserService } from 'src/app/core/services/api/user.service';
import { bioForm } from '../edit-forms';

@Injectable({
  providedIn: 'root'
})
export class EditBioFormService extends AbstractFormService<bioForm> {
  currentUser!: User | undefined;

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
        bio: [this.currentUser?.bio]
      });
  }

  get bio(): string | null {
    return this.form.value.bio;
  }

  submitForm(): void {
    if (this.currentUser) {
      this.currentUser.bio = this.bio ?? '';
      this._userService
        .updateCurrentUserDetails(this.currentUser)
        .pipe(take(1))
        .subscribe();
      this._authState.refreshDetails();
    }
  }
}
