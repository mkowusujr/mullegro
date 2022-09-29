import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/core/auth/auth.guard';

import { UserProfilePageModule } from './user-profile-page/user-profile-page.module';
import { UserProfileEditPageModule } from './user-profile-edit-page/user-profile-edit-page.module';

import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { UserProfileEditPageComponent } from './user-profile-edit-page/user-profile-edit-page.component';

const routes: Routes = [
  {
    path: 'user/settings',
    component: UserProfileEditPageComponent,
    canActivate: [AuthGuard]
  },
  { path: 'user/:username', component: UserProfilePageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    UserProfilePageModule,
    UserProfileEditPageModule
  ],
  exports: [RouterModule]
})
export class UserProfilePagesRoutingModule {}
