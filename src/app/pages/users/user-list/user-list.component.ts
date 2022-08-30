import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'user-list',
  template: `
    <ng-container *ngFor="let user of users$ | async">
      <user-list-card
        [avatarImg]="user?.profile_picture"
        [userUsername]="user?.username"
        [userName]="user?.name"
      ></user-list-card>
    </ng-container>
  `
})
export class UserListComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this._userService.getAllUsers();
  }
}
