import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPagesRoutingModule } from './user-pages-routing.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserPagesRoutingModule,
    UserProfileModule
  ]
})
export class UserPagesModule { }
