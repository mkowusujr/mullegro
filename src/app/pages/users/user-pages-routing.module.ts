import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileModule } from './user-profile/user-profile.module';
import { UserListModule } from './user-list/user-list.module';

import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'user/:username', component: UserProfileComponent },
  { path: 'users', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), UserListModule, UserProfileModule],
  exports: [RouterModule]
})
export class UserPagesRoutingModule {}
