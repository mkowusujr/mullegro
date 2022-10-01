import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'user-list-page',
  template: `
    <input type="text" placeholder="Search for Users" (keyup)="onKey($event)" />
    <div class="user-list">
      <ng-container *ngFor="let user of users">
        <user-list-card
          [avatarImg]="user?.profile_picture"
          [userUsername]="user?.username"
          [userName]="user?.name"
        ></user-list-card>
      </ng-container>
    </div>
    
  `
})
export class UserListComponent implements OnInit {
  users!: User[];
  currentUser$!: Observable<User | undefined>;
  searchQuery = '';

  constructor(
    private _userService: UserService,
    private _authState: AuthStateService
  ) {}

  ngOnInit(): void {
    this.currentUser$ = this._authState.currentUser$;
    this.initalFetchUsers();
  }

  initalFetchUsers() {
    this._userService
      .getAllUsers()
      .pipe(take(1))
      .subscribe(users => {
        let username: string | undefined;
        this.currentUser$.pipe(take(1)).subscribe(usr => {
          username = usr?.username;
        });
        this.users = users.filter(u => u.username != username);
      });
  }

  onKey(event: any) {
    this.searchQuery = event.target.value;
    this._userService
      .findUsersWithSearchQuery(this.searchQuery)
      .pipe(take(1))
      .subscribe(users => (this.users = users));
  }
}
