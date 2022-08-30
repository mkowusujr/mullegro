import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPagesRoutingModule } from './user-pages-routing.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { UserListModule } from './user-list/user-list.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserPagesRoutingModule,
    UserProfileModule,
    UserListModule
  ]
})
export class UserPagesModule {}
