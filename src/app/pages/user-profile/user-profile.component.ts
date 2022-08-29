import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { AuthStateService } from 'src/app/core/auth/auth-state.service';
import { Post } from 'src/app/core/interfaces/post';
import { User } from 'src/app/core/interfaces/user';
import { PostService } from 'src/app/core/services/api/post.service';

@Component({
  selector: 'user-profile',
  template: `
    <three-column-display>
      <div col1>test 1</div>
      <user-details col2 [username]="username"></user-details>
      <post-list
        col3
        [posts]="posts$ | async"
        [header]="col3Header"
      ></post-list>
    </three-column-display>
  `
})
export class UserProfileComponent implements OnInit {
  currentUser$!: Observable<User | undefined>;
  posts$!: Observable<Post[]>;
  col3Header!: string;
  username!: string;
  constructor(
    private _authState: AuthStateService,
    private _postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentUser$ = this._authState.currentUser$;
    this.username = '';
    this.route.params
      .pipe(take(1))
      .subscribe(params => (this.username = params['username']));
    this.posts$ = this._postService.getAllPostsForUser(this.username);
    this.col3Header = `${this.username}'s Posts`;
  }
}
