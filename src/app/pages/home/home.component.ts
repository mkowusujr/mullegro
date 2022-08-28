import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-page">
      <div class="welcome-banner">
        <h2>Welcome to Mullegro {{ (currentUser$ | async)?.name }}</h2>
        <p>
          A community where music lovers can buy and sale their used instruments
        </p>
      </div>

      <a class="card-r">
        <h2>Catagories</h2>
        <p>View the types of instruments currently being sold</p>
      </a>

      <a class="card-y">
        <h2>New!</h2>
        <p>View recently added instruments</p>
      </a>

      <a class="card-g">
        <h2>Users</h2>
        <p>View the members of the mullegro community</p>
      </a>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  currentUser$!: Observable<User | undefined>;
  constructor(
    private _authState: AuthStateService
  ) {}

  ngOnInit(): void {
    this.currentUser$.pipe(take(1)).subscribe(res =>  console.log(res))
  }
}
