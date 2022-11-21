import { Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription, take, takeUntil } from 'rxjs';
import { IPost } from 'src/app/core/interfaces/post';
import { IReview } from 'src/app/core/interfaces/review';
import { PostService } from 'src/app/core/services/api/post.service';
import { ReviewService } from 'src/app/core/services/api/review.service';
import { UserService } from 'src/app/core/services/api/user.service';
import { AddReviewFormService } from './add-review/add-review-form.service';

@Component({
  selector: 'add-review',
  providers: [AddReviewFormService],
  template: `
    <three-column-display>
      <div col1>
        <img [src]="(post$ | async)?.display_picture" />
      </div>
      <post-details
        col2
        [post]="post$ | async"
        [username]="username"
      ></post-details>
      <div col3 class="review-section">
        <ng-container *ngIf="(review$ | async) || wasReviewCreated">
          <h1>Existing Review</h1>
          <review [review]="review$ | async"></review>
        </ng-container>
        <!-- <ng-template #noExistingReviewTemplate> -->
        <h1
          [innerText]="
            (review$ | async) || wasReviewCreated
              ? 'Update Review'
              : 'Add Review'
          "
        ></h1>
        <add-review-form
          [postId]="postId"
          (reviewCreatedEvent)="handleReviewUpdate($event)"
        ></add-review-form>
        <!-- </ng-template> -->
      </div>
    </three-column-display>
  `
})
export class ReviewPageComponent implements OnDestroy {
  review$!: Observable<IReview>;
  post$!: Observable<IPost>;
  postId = -1;
  username!: string;
  wasReviewCreated = false;
  routeParamsSubscription: Subscription;
  componentIsBeingDestroyedNotifier = new Subject<void>();
  r!: IReview;

  constructor(
    private _postService: PostService,
    private _userService: UserService,
    private _reviewService: ReviewService,
    private route: ActivatedRoute,
    private _titleService: Title
  ) {
    this.routeParamsSubscription = this.route.params.subscribe(params => {
      this.postId = +params['postId'];
      this.post$ = this._postService.getPost(this.postId);
      this.getPostOwnerInfo();
      this.review$ = this._reviewService.getReviewBelongingToPost(this.postId);
      this.review$.subscribe(r => (this.r = r));

      this.post$
        .pipe(takeUntil(this.componentIsBeingDestroyedNotifier))
        .subscribe(post =>
          this._titleService.setTitle(
            `Review for ${post.title} | Mullegro - Posts`
          )
        );
    });
  }

  getPostOwnerInfo() {
    this.post$
      .pipe(takeUntil(this.componentIsBeingDestroyedNotifier))
      .subscribe({
        next: post =>
          this._userService
            .getUserById(post.userId ?? -1)
            .pipe(takeUntil(this.componentIsBeingDestroyedNotifier))
            .subscribe({
              next: user => {
                this.username = user.username;
              }
            })
      });
  }

  handleReviewUpdate(isCreated: boolean) {
    this.wasReviewCreated = isCreated;
    this.review$ = this._reviewService.getReviewBelongingToPost(this.postId);
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription.unsubscribe();
    this.componentIsBeingDestroyedNotifier.next();
    this.componentIsBeingDestroyedNotifier.complete();
  }
}
