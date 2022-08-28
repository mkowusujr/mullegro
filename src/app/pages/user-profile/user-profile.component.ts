import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'user-profile',
  template: `
    <div class="user-profile">
      <three-column-display>
        <div col1>test 1</div>
        <div col2>test 2</div>
        <div col3>test 3</div>
      </three-column-display>
    </div>
  `
})
export class UserProfileComponent implements OnInit {
  currentUser$!: Observable<User | undefined>;

  constructor(private _authState: AuthStateService) {}

  ngOnInit(): void {
    this.currentUser$ = this._authState.currentUser$;
  }
}
