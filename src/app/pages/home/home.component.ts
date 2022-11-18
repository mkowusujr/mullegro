import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { IUser } from 'src/app/core/interfaces/user';

@Component({
  selector: 'home',
  template: `
    <div class="welcome-banner">
      <h2>Welcome to Mullegro {{ (currentUser$ | async)?.name }}</h2>
      <p>
        A community where music lovers can buy and sale their used instruments
      </p>
    </div>

    <a
      class="card-r hover-card"
      [routerLink]="['/category']"
      routerLinkActive="active"
    >
      <h2>Categories</h2>
      <p>View the types of instruments currently being sold</p>
    </a>

    <a
      class="card-y hover-card"
      [routerLink]="['/posts']"
      routerLinkActive="active"
    >
      <h2>Shop For Instruments!</h2>
      <p>View all the instruments other users have posted for sale</p>
    </a>

    <a
      class="card-g hover-card"
      [routerLink]="['/users']"
      routerLinkActive="active"
    >
      <h2>Users</h2>
      <p>View the members of the mullegro community</p>
    </a>
  `,
})
export class HomeComponent implements OnInit {
  currentUser$!: Observable<IUser | undefined>;
  constructor(private _authState: AuthStateService) {}

  ngOnInit(): void {
    this.currentUser$ = this._authState.currentUser$;
  }
}
