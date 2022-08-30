import { Component } from '@angular/core';

@Component({
  selector: 'user-profile-details',
  template: `
    <h1>User Stats</h1>
    <p>
      <ng-content></ng-content>
    </p>
  `
})
export class UserProfileDetailsComponent {}
