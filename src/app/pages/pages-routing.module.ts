import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthPagesModule } from './auth/auth-pages.module';
import { UserProfileComponent } from './user-profile/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', loadChildren: () => AuthPagesModule },
  { path: 'user/:username', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
