import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileModule } from './user-profile/user-profile.module';

const routes: Routes = [
  {path: 'user/:username', loadChildren: () => UserProfileModule},
  {path: 'users', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPagesRoutingModule { }
