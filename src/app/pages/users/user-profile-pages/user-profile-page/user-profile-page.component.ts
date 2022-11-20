import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { Title } from '@angular/platform-browser';
import { IPost } from 'src/app/core/interfaces/post';
import { IReview } from 'src/app/core/interfaces/review';
import { IUser } from 'src/app/core/interfaces/user';
import { IUserStats } from 'src/app/core/interfaces/user-stats';
import { PostService } from 'src/app/core/services/api/post.service';
import { ReviewService } from 'src/app/core/services/api/review.service';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'user-profile',
  template: `
    <three-column-display>
      <user-profile-summary
        col1
        [avatarImg]="(currentUser$ | async)?.profile_picture"
        [userUsername]="(currentUser$ | async)?.username"
        [userName]="(currentUser$ | async)?.name"
        [joinedDate]="(currentUser$ | async)?.createdAt"
        [bio]="(currentUser$ | async)?.bio"
        [isCurrentUser]="
          (loggedInUser$ | async)?.username === (currentUser$ | async)?.username
        "
      ></user-profile-summary>

      <user-profile-details col2>
        <user-sales-stats [userStats]="userStats$ | async"></user-sales-stats>
        <br />
        <h3>Reviews on {{ (currentUser$ | async)?.username }}'s Products</h3>
        <review-list [reviews]="reviews$ | async"></review-list>
      </user-profile-details>

      <post-list col3 [posts]="posts$ | async" [header]="header"></post-list>
    </three-column-display>
  `
})
export class UserProfilePageComponent implements OnInit, OnDestroy {
  loggedInUser$!: Observable<IUser | undefined>;
  currentUser$!: Observable<IUser>;
  posts$!: Observable<IPost[]>;
  header!: string;
  username!: string;
  reviews$!: Observable<IReview[]>;
  userStats$!: Observable<IUserStats>;
  routeParamsSubscription: Subscription;
  componentIsBeingDestroyedNotifier = new Subject<void>();

  constructor(
    private _userService: UserService,
    private _postService: PostService,
    private _reviewService: ReviewService,
    private _authState: AuthStateService,
    private route: ActivatedRoute,
    private _titleService: Title
  ) {
    this.routeParamsSubscription = this.route.params.subscribe(params => {
      this.username = params['username'];

      this.setUserProfilePageUserDetails(this.username);
      this.userStats$ = this._reviewService.getStatsForUser(this.username);
      this.reviews$ = this._reviewService.getAllReviewsFromPostsMadeByUser(
        this.username
      );
      this.currentUser$
        .pipe(takeUntil(this.componentIsBeingDestroyedNotifier))
        .subscribe(user => {
          this._titleService.setTitle(
            `${user.name} (@${user.username}) | Mullegro - Users`
          );
        });
    });
  }

  ngOnInit(): void {
    this.loggedInUser$ = this._authState.currentUser$;
  }

  setUsersPosts(username: string) {
    this.posts$ = this._postService.getAllPostsForUser(username);
  }

  setUserProfilePageUserDetails(username: string) {
    this.currentUser$ = this._userService.getUser(username);
    this.setUsersPosts(username);
    this.header = `Posts by ${username}`;
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription.unsubscribe();
    this.componentIsBeingDestroyedNotifier.next();
    this.componentIsBeingDestroyedNotifier.complete();
  }
}
