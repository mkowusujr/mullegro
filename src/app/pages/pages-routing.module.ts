import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthPagesModule } from './auth/auth-pages.module';
import { UserPagesModule } from './users/user-pages.module';
import { PostPagesModule } from './posts/post-pages.module';
import { CartModule } from './cart/cart.module';
import { CategoryModule } from './category/category.module';
import { TransactionsModule } from './transactions/transactions.module';

import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';

import { AuthGuard } from '../core/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', loadChildren: () => AuthPagesModule },
  { path: '', loadChildren: () => UserPagesModule },
  { path: '', loadChildren: () => PostPagesModule },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'category', component: CategoryComponent },
  { path: '', loadChildren: () => TransactionsModule, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes), CartModule, CategoryModule],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
