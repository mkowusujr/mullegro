import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { IUser } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  currentUser$!: Observable<IUser | undefined>;
  showUserUtilsMenu = false;

  constructor(private _authState: AuthStateService, private _router: Router) {}

  ngOnInit(): void {
    this.currentUser$ = this._authState.currentUser$;
  }

  signOut() {
    this._authState.loggout();
  }

  searchForPosts(searchInput: string) {
    this._router.navigate(['/posts'], {
      queryParams: { searchQuery: searchInput }
    });
  }

  toggleUserUtilsMenu() {
    this.showUserUtilsMenu = !this.showUserUtilsMenu;
  }

  updateShowUserUtilsMenu(showUserUtilsMenu: boolean) {
    this.showUserUtilsMenu = showUserUtilsMenu;
  }

  onClickedOutside(e: Event) {
    this.showUserUtilsMenu = false;
  }
}
