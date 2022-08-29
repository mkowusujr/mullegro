import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'user-details',
  template: ` <p>user-details works!</p> `,
  styles: []
})
export class UserDetailsComponent implements OnInit {
  @Input() username!: string;
  user$!: Observable<User>;
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.user$ = this._userService.getUser(this.username);
  }
}
