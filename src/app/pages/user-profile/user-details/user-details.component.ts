import { Component } from '@angular/core';

@Component({
  selector: 'user-details',
  template: `
    <h1>Bio</h1>
    <p>
      <ng-content></ng-content>
    </p>
  `
})
export class UserDetailsComponent {}
