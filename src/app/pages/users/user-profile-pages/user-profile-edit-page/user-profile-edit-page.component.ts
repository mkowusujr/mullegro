import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'user-profile-edit-page',
  template: `
    <h1>Update Account Details</h1>
    <edit-bio-form></edit-bio-form>
    <edit-address-form></edit-address-form>
    <edit-email-form></edit-email-form>
    <edit-password-form></edit-password-form>
  `,
  styles: []
})
export class UserProfileEditPageComponent implements OnInit {
  currentUser$!: Observable<User | undefined>;

  constructor(private _authStateService: AuthStateService) {}

  ngOnInit(): void {
    this.currentUser$ = this._authStateService.currentUser$;
  }
}
