import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-list-card',
  template: `
    <a [routerLink]="[userRoute]" routerLinkActive="active" class="user-list-card">
      <img [src]="[avatarImg]" />
      <div class="user-list-card-details">
        <p>@{{ userUsername }}</p>
        <p>{{ userName }}</p>
      </div>
    </a>
  `
})
export class UserListCardComponent implements OnInit{
  @Input() avatarImg!: string | undefined;
  @Input() userName!: string | undefined;
  @Input() userUsername!: string | undefined;
  userRoute: string = '';

  ngOnInit(): void {
      this.userRoute = `/user/${this.userUsername}`;
    }
}
