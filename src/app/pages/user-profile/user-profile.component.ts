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
    <div class="user-profile">
      <three-column-display>
        <div col1>test 1</div>
        <div col2>test 2</div>
        <post-list
          col3
          [posts]="posts$ | async"
          [header]="col3Header"
        ></post-list>
      </three-column-display>
    </div>
  `
})
export class UserProfileComponent implements OnInit {
  currentUser$!: Observable<User | undefined>;
  posts$!: Observable<Post[]>;
  col3Header!: string;
  constructor(
    private _authState: AuthStateService,
    private _postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentUser$ = this._authState.currentUser$;
    let username = '';
    this.route.params
      .pipe(take(1))
      .subscribe(params => (username = params['username']));
    this.posts$ = this._postService.getAllPostsForUser(username);
    this.col3Header = `${username}'s Posts`;
  }
}
