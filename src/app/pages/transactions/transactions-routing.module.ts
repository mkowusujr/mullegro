import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionPageModule } from './transaction-page/transaction-page.module';
import { TransactionsListPageModule } from './transactions-list-page/transactions-list-page.module';

import { TransactionPageComponent } from './transaction-page/transaction-page.component';
import { TransactionsListPageComponent } from './transactions-list-page/transactions-list-page.component';

const routes: Routes = [
  { path: 'user/transactions', component: TransactionsListPageComponent },
  {
    path: 'user/transactions/transaction/:id',
    component: TransactionPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TransactionsListPageModule,
    TransactionPageModule
  ],
  exports: [RouterModule]
})
export class TransactionsRoutingModule {}
