import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-page">
      <div class="welcome-banner">
        <h2>Welcome to Mullegro {{ name }}</h2>
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
  name: string | undefined;
  constructor(private _auth: AuthService, private _userService: UserService) {}

  ngOnInit(): void {
    if (this._auth.doesJwtExist())
      this._userService.getLoggedInUserDetails().subscribe(res => {
        console.log(res)
        this.name = res.name;
      });
  }
}
