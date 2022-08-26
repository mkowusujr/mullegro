import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'app-login',
  template: `
  <p>Login works</p>
  `,
})
export class LoginComponent implements OnInit {
  constructor(
    private _auth: AuthService,
    private _userService: UserService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  attemptLogin(form: NgForm) {
    console.log('Your form data : ', form.value);

    this._userService.login(form.value).subscribe((res: any) => {
      console.log(res);
      if (res.status) {
        this._auth.saveJwtToken('jwt', res.token);
        this._router.navigate(['']);
      }
    });
  }

  logout() {
    this._auth.clearJwtToken();
    this._router.navigate(['']);
  }
}
