import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthPagesModule } from './auth/auth-pages.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', loadChildren: () => AuthPagesModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
