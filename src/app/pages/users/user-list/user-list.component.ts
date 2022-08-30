import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'user-list',
  template: ` 
    <p>user-list works!</p> 
    <ng-container *ngFor="let user of (users$ | async)">
      <div>
        {{user?.name}}
      </div>
    </ng-container>
  `
})
export class UserListComponent implements OnInit {
  users$!: Observable<User[]>

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this._userService.getAllUsers();
  }
}
