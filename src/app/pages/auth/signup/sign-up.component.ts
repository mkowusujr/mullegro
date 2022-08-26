import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  template: `
    <div class="Signup">
      <h4>Sign Up</h4>
      <form>
        <input
          type="text"
          name="firstname"
          placeholder="Enter First Name"
          required
          ngModel
        />
        <input
          type="text"
          name="lastname"
          placeholder="Enter Last Name"
          required
          ngModel
        />
        <input
          type="text"
          name="address"
          placeholder="Enter Adress"
          required
          ngModel
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          required
          ngModel
        />
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          required
          ngModel
        />
        <input
          type="password"
          name="password_1"
          placeholder="Enter Password"
          required
          ngModel
        />
        <input
          type="password"
          name="password_2"
          placeholder="Re-enter Password"
          required
          ngModel
        />
        <input type="submit" value="Signup" />
      </form>
    </div>
  `,
  styles: []
})
export class SignUpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
