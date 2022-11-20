import { Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
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
  componentIsBeingDestroyedNotifier = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private _transactionService: TransactionService,
    private _titleService: Title
  ) {
    this.routeParamsSubscription = this.route.params.subscribe(params => {
      this.transaction$ = this._transactionService.getTransaction(
        +params['id']
      );

      this.transaction$.pipe(takeUntil(this.componentIsBeingDestroyedNotifier)).subscribe(transaction => 
        this._titleService.setTitle(` Transaction ${transaction.id} | Mullegro - User Transaction`)
        );
    });
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription.unsubscribe();
    this.componentIsBeingDestroyedNotifier.next();
    this.componentIsBeingDestroyedNotifier.complete();
  }
}
