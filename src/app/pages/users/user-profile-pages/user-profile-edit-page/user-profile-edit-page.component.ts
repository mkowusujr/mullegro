import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'user-profile-edit-page',
  template: `
    <p>
      user-profile-edit-page works!
    </p>
    <edit-bio-form></edit-bio-form>
  `,
  styles: [
  ]
})
export class UserProfileEditPageComponent implements OnInit {
  currentUser$!: Observable<User| undefined> ;

  constructor(private _authStateService: AuthStateService) { }

  ngOnInit(): void {
    this.currentUser$ = this._authStateService.currentUser$;
  }
}
