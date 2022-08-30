import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile-summary',
  template: `
    <img [src]="avatarImg" />
    <div class="info">
      <h2>{{ userUsername }}</h2>
      <p>{{ userName }}</p>
      <div class="bio">
        <h2>Bio</h2>
        <p>{{ bio }}</p>
      </div>
    </div>
  `
})
export class UserProfileSummaryComponent implements OnInit {
  @Input() avatarImg!: string | undefined;
  @Input() userUsername!: string | undefined;
  @Input() userName!: string | undefined;
  @Input() bio!: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
