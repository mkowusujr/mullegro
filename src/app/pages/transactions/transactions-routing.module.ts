import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';
import { TransactionsListPageComponent } from './transactions-list-page/transactions-list-page.component';

const routes: Routes = [
  { path: 'transactions', component: TransactionsListPageComponent },
  {path: 'transactions/transaction/:id', component: TransactionPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule {}
