import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="Login">
      <h4>Login</h4>
      <form> 
        <input type="text" name="email_or_username" placeholder="Email or Username" ngModel required>
        <input type="password" name="password" placeholder="Password" ngModel required>
        <input type="submit" value="Login">
    </form>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
