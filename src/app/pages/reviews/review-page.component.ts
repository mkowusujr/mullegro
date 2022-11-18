import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Post } from 'src/app/core/interfaces/post';
import { Review } from 'src/app/core/interfaces/review';
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
        <review [review]="review$ | async"></review>
        <add-review-form [postId]="(post$ | async)?.id"></add-review-form>
      </div>
    </three-column-display>
  `
})
export class ReviewPageComponent implements OnInit {
  review$!: Observable<Review>;
  post$!: Observable<Post>;
  postId = -1;
  username!: string;

  constructor(
    private _postService: PostService,
    private _userService: UserService,
    private _reviewService: ReviewService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.postId = +params['postId'];
      this.post$ = this._postService.getPost(this.postId);
      this.getPostOwnerInfo();
      this.review$ = this._reviewService.getReviewBelongingToPost(this.postId);
    });
  }

  ngOnInit(): void {}

  getPostOwnerInfo() {
    this.post$.pipe(take(1)).subscribe({
      next: post =>
        this._userService
          .getUserById(post.userId ?? -1)
          .pipe(take(1))
          .subscribe({
            next: user => {
              this.username = user.username;
            }
          })
    });
  }
}
