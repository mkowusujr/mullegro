import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile-summary',
  template: `
    <img [src]="avatarImg" />
    <div class="info">
      <h2>{{ userUsername }}</h2>
      <p>{{ userName }}</p>
      <p>Joined on {{ joinedDate | date }}</p>
      <div class="bio">
        <h3>Bio</h3>
        <p>{{ bio }}</p>
      </div>
      <a
        [routerLink]="['/user/settings']"
        routerLinkActive="active"
        *ngIf="isCurrentUser"
      >
        Edit Account Settings
      </a>
    </div>
  `
})
export class UserProfilePageSummaryComponent implements OnInit {
  @Input() avatarImg!: string | undefined;
  @Input() userUsername!: string | undefined;
  @Input() userName!: string | undefined;
  @Input() joinedDate!: Date | undefined;
  @Input() bio!: string | undefined;
  @Input() isCurrentUser = false;

  constructor() {}

  ngOnInit(): void {}
}
