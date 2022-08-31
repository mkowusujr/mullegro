import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthPagesModule } from './auth/auth-pages.module';
import { UserPagesModule } from './users/user-pages.module';
import { PostPagesModule } from './posts/post-pages.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', loadChildren: () => AuthPagesModule },
  { path: '', loadChildren: () => UserPagesModule },
  { path: '', loadChildren: () => PostPagesModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
