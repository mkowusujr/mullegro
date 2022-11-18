import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/auth/auth.guard';

import { AuthPagesModule } from './auth/auth-pages.module';
import { UserPagesModule } from './users/user-pages.module';
import { PostPagesModule } from './posts/post-pages.module';
import { CartModule } from './cart/cart.module';
import { CategoryModule } from './category/category.module';
import { TransactionsModule } from './transactions/transactions.module';
import { HomePageModule } from './home/home-page.module';
import { ReviewsPagesModule } from './reviews/reviews-pages.module';

const routes: Routes = [
  { path: '', loadChildren: () => HomePageModule },
  { path: '', loadChildren: () => AuthPagesModule },
  { path: '', loadChildren: () => UserPagesModule },
  { path: '', loadChildren: () => PostPagesModule },
  { path: '', loadChildren: () => CartModule, canActivate: [AuthGuard] },
  { path: '', loadChildren: () => CategoryModule },
  {
    path: '',
    loadChildren: () => TransactionsModule,
    canActivate: [AuthGuard]
  },
  { path: '', loadChildren: () => ReviewsPagesModule, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
