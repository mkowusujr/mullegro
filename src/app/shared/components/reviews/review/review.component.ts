import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/core/interfaces/post';
import { IReview } from 'src/app/core/interfaces/review';
import { IUser } from 'src/app/core/interfaces/user';
import { PostService } from 'src/app/core/services/api/post.service';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'review',
  template: `
    <ng-container *ngIf="review">
      <p>
        <b>{{ (post$ | async)?.title }}</b>
      </p>
      <star-rating
        [labelText]="'Rating: ' + review.rating.toString()"
        [starType]="'svg'"
        [rating]="review.rating"
        [showHalfStars]="true"
        [readOnly]="true"
        [disabled]="true"
      >
      </star-rating>
      <a
        [routerLink]="['/user/' + (user$ | async)?.username]"
        routerLinkActive="active"
        >{{ (user$ | async)?.username }}
      </a>
      <p>{{ review.description }}</p>
      <p>
        <i>Posted on {{ review.createdAt | date }}</i>
      </p>
    </ng-container>
  `
})
export class ReviewComponent implements OnInit {
  @Input() review!: IReview | null;
  @Input() postId!: number;
  user$!: Observable<IUser>;
  post$!: Observable<IPost>;

  constructor(
    private _userService: UserService,
    private _postService: PostService
  ) {}

  ngOnInit(): void {
    if (this.review) {
      this.user$ = this._userService.getUserById(this.review.userId);
      this.post$ = this._postService.getPost(this.review.postId);
    }
  }
}
