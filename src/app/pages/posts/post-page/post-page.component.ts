import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
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
export class PostPageComponent {
  post$!: Observable<IPost>;
  posts!: IPost[];
  header!: string;
  username!: string;

  constructor(
    private route: ActivatedRoute,
    private _postService: PostService,
    private _userService: UserService
  ) {
    route.params.subscribe(params => {
      this.post$ = this._postService.getPost(+params['id']);
      this.getPostOwnerInfo();
    });
  }

  getPostOwnerInfo() {
    this.post$.pipe(take(1)).subscribe({
      next: post =>
        this._userService
          .getUserById(post.userId ?? -1)
          .pipe(take(1))
          .subscribe({
            next: user => {
              this.header = `Other posts by ${user.username}`;
              this.username = user.username;
              this._postService
                .getAllPostsForUser(user.username)
                .pipe(take(1))
                .subscribe(
                  posts => (this.posts = posts.filter(p => p.id != post.id))
                );
            }
          })
    });
  }
}
