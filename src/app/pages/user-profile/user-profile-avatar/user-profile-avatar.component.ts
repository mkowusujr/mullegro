import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile-avatar',
  template: ` 
    <img [src]="avatarImg" /> 
    <div class="info">
      <h2>{{userUsername}}</h2>
      <p>{{userName}}</p>
    </div>
    `
})
export class UserProfileAvatarComponent implements OnInit {
  @Input() avatarImg!: string | undefined;
  @Input() userUsername!: string | undefined;
  @Input() userName!: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
