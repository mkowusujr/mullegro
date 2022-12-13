import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { IUser } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'user-list-page',
  template: `
    <input type="text" placeholder="Search for Users" (keyup)="onKey($event)" />
    <div class="user-list">
      <ng-container *ngFor="let user of users$ | async">
        <user-list-card
          [avatarImg]="user?.profilePicture"
          [userUsername]="user?.username"
          [userName]="user?.name"
          [userJoinOnDate]="user?.createdAt"
        ></user-list-card>
      </ng-container>
    </div>
  `
})
export class UserListComponent implements OnInit, OnDestroy {
  users$!: Observable<IUser[]>;
  currentUser$!: Observable<IUser | undefined>;
  searchQuery = '';
  componentIsBeingDestroyedNotifier = new Subject<void>();

  constructor(
    private _userService: UserService,
    private _authState: AuthStateService
  ) {}

  ngOnInit(): void {
    this.currentUser$ = this._authState.currentUser$;
    this.initalFetchUsers();
  }

  initalFetchUsers() {
    this.users$ = this._userService.getAllUsers().pipe(
      map(users => {
        let username: string | undefined;

        this.currentUser$
          .pipe(takeUntil(this.componentIsBeingDestroyedNotifier))
          .subscribe(usr => {
            username = usr?.username;
          });

        return users.filter(u => u.username != username);
      })
    );
  }

  onKey(event: any) {
    this.searchQuery = event.target.value;
    this.users$ = this._userService.findUsersWithSearchQuery(this.searchQuery);
  }

  ngOnDestroy(): void {
    this.componentIsBeingDestroyedNotifier.next();
    this.componentIsBeingDestroyedNotifier.complete();
  }
}
