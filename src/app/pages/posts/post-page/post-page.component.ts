import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { IPost } from 'src/app/core/interfaces/post';
import { PostService } from 'src/app/core/services/api/post.service';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'post',
  template: `
    <three-column-display>
      <div col1>
        <img [src]="(post$ | async)?.display_picture" />
      </div>
      <post-details col2 [post]="post$ | async" [username]="username">
        <post-add-to-cart [post]="post$ | async"></post-add-to-cart>
      </post-details>
      <post-list col3 [posts]="posts" [header]="header"></post-list>
    </three-column-display>
  `
})
export class PostPageComponent implements OnDestroy {
  post$!: Observable<IPost>;
  posts!: IPost[];
  header!: string;
  username!: string;
  routeParamsSubscription: Subscription;
  componentIsBeingDestroyedNotifier = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private _postService: PostService,
    private _userService: UserService
  ) {
    this.routeParamsSubscription = this.route.params.subscribe(params => {
      this.post$ = this._postService.getPost(+params['id']);
      this.getPostOwnerInfo();
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
                this.header = `Other posts by ${user.username}`;
                this.username = user.username;
                this._postService
                  .getAllPostsForUser(user.username)
                  .pipe(takeUntil(this.componentIsBeingDestroyedNotifier))
                  .subscribe(
                    posts => (this.posts = posts.filter(p => p.id != post.id))
                  );
              }
            })
      });
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription.unsubscribe();
    this.componentIsBeingDestroyedNotifier.next();
    this.componentIsBeingDestroyedNotifier.complete();
  }
}
