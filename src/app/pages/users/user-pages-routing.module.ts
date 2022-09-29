import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserProfilePagesModule } from './user-profile-pages/user-profile-pages.module';
import { UserListModule } from './user-list/user-list.module';

import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', loadChildren: () => UserProfilePagesModule },
  { path: 'users', component: UserListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    UserListModule,
    UserProfilePagesModule
  ],
  exports: [RouterModule]
})
export class UserPagesRoutingModule {}
