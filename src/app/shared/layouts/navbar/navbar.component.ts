import { Component, OnInit } from '@angular/core';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  name: string | undefined;

  constructor(
    private _authState: AuthStateService,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    if (this._authState.isSignedIn())
      this._userService.getLoggedInUserDetails().subscribe(res => {
        console.log(res);
        this.name = res.name;
      });
  }
}
