import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/core/interfaces/transaction';
import { TransactionService } from 'src/app/core/services/api/transaction.service';

@Component({
  selector: 'transaction-page',
  template: `
    <p>{{ (transaction$ | async)?.dateString }}</p>
    <p>{{ (transaction$ | async)?.totalAmount }}</p>
    <p>{{ (transaction$ | async)?.itemCount }}</p>
    <ng-container *ngFor="let post of (transaction$ | async)?.posts">
      <p>{{ post.title }}</p>
    </ng-container>
  `,
  styles: []
})
export class TransactionPageComponent implements OnInit {
  transaction$!: Observable<Transaction>;
  
  constructor(private route: ActivatedRoute, private _transactionService: TransactionService) {
    route.params.subscribe(params => {
      this.transaction$ = this._transactionService.getTransaction(
        +params['id']
      );
    });
  }

  ngOnInit(): void {}
}
