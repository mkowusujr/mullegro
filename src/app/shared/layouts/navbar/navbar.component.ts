import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  currentUser$!: Observable<User | undefined>;
  showUserUtilsMenu = false;

  constructor(private _authState: AuthStateService) {
  }
  
  ngOnInit(): void {
    this.currentUser$ = this._authState.currentUser$;
  }

  signOut() {
    this._authState.loggout();
  }

  toggleUserUtilsMenu() {
    this.showUserUtilsMenu = !this.showUserUtilsMenu;
  }

  updateShowUserUtilsMenu(showUserUtilsMenu: boolean){
    this.showUserUtilsMenu = showUserUtilsMenu;
  }

  onClickedOutside(e: Event) {
    this.showUserUtilsMenu = false;
  }
}
