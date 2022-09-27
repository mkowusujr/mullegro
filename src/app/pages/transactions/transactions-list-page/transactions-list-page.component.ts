import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionService } from 'src/app/core/services/api/transaction.service';
import { Transaction } from 'src/app/core/interfaces/transaction';

@Component({
  selector: 'transactions-list-page',
  template: `
    <ng-container *ngFor="let transaction of transactions$ | async">
      
      <div class="card-g transaction-item">
        <p><b>Transaction on {{ transaction.dateString }}</b></p>
        <div>
          <p>Total Item Count: {{ transaction.itemCount }}</p>
          <p>total Amount: {{ transaction.totalAmount | currency }}</p>
        </div>
        <p>Item Names:</p>
        <ul>
          <ng-container *ngFor="let post of (transaction.posts)">
            <li class="transact-post-title">{{ post?.title }}</li>
          </ng-container>
        </ul>
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
    this.transactions$.subscribe(t => console.log(t))
  }
}
