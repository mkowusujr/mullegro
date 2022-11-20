import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ITransaction } from 'src/app/core/interfaces/transaction';
import { TransactionService } from 'src/app/core/services/api/transaction.service';

@Component({
  selector: 'transaction-page',
  template: `
    <h1>Transaction on {{ (transaction$ | async)?.createdAt | date }}</h1>
    <p>Item Count: {{ (transaction$ | async)?.itemCount }}</p>
    <p>Total Amount: {{ (transaction$ | async)?.totalAmount | currency }}</p>
    <h2>Transaction Items:</h2>
    <div class="transact-post-items-list">
      <div
        class="transact-post-item"
        *ngFor="let post of (transaction$ | async)?.posts"
      >
        <a [routerLink]="['posts/post', post.id]" routerLinkActive="active">
          <img [src]="post.display_picture" />
          <div>
            <p>
              <b>{{ post.title }}</b>
            </p>
            <p>{{ post.category }}</p>
            <p>{{ post.price | currency }}</p>
            <p>{{ post.condition }}</p>
          </div>
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class TransactionPageComponent implements OnDestroy {
  transaction$!: Observable<ITransaction>;
  routeParamsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private _transactionService: TransactionService
  ) {
    this.routeParamsSubscription = this.route.params.subscribe(params => {
      this.transaction$ = this._transactionService.getTransaction(
        +params['id']
      );
    });
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription.unsubscribe();
  }
}
