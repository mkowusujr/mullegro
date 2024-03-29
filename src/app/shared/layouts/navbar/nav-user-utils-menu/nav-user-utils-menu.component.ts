import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { IUser } from 'src/app/core/interfaces/user';

@Component({
  selector: 'nav-user-utils-menu',
  template: `
    <ul [style.display]="showUserUtilsMenu ? 'block' : 'none'">
      <li [routerLink]="['/posts/create-post']" routerLinkActive="active">
        <a> Create a Post </a>
      </li>
      <li [routerLink]="['/cart']" routerLinkActive="active">
        <a>Cart</a>
      </li>
      <li
        [routerLink]="['/user/' + (currentUser$ | async)?.username]"
        routerLinkActive="active"
      >
        <a> {{ (currentUser$ | async)?.name }}'s Profile Page </a>
      </li>
      <li (click)="signOut()">
        <a>Sign Out</a>
      </li>
    </ul>
  `
})
export class NavUserUtilsMenuComponent implements OnInit {
  currentUser$!: Observable<IUser | undefined>;
  @Input() showUserUtilsMenu = false;
  @Output() showUserUtilsMenuChange = new EventEmitter<boolean>();

  constructor(private _authState: AuthStateService) {}

  ngOnInit(): void {
    this.currentUser$ = this._authState.currentUser$;
  }

  signOut() {
    this.showUserUtilsMenu = false;
    this.showUserUtilsMenuChange.emit(this.showUserUtilsMenu);
    this._authState.loggout();
  }
}
