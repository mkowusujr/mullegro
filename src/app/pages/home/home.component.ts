import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-page">
      <div class="welcome-banner">
        <h2>Welcome to Mullegro</h2>
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
  constructor() {}

  ngOnInit(): void {}
}
