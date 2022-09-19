import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionService } from 'src/app/core/services/api/transaction.service';
import { Transaction } from 'src/app/core/interfaces/transaction';

@Component({
  selector: 'transactions-list-page',
  template: `
    <ng-container *ngFor="let transaction of (transactions$ | async)">
      <div>
        <p>{{ transaction.dateString }}</p>
        <p>{{ transaction.itemCount }}</p>
        <p>{{ transaction.totalAmount }}</p>
      </div>
    </ng-container>
  `,
  styles: []
})
export class TransactionsListPageComponent implements OnInit {
  transactions$!: Observable<Transaction[]>;
  constructor(private _transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactions$ = this._transactionService.getAllTransactions();
  }
}
