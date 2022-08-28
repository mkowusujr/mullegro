import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
        <post-list col3 [posts]="posts$ | async"></post-list>
      </three-column-display>
    </div>
  `
})
export class UserProfileComponent implements OnInit {
  currentUser$!: Observable<User | undefined>;
  posts$!: Observable<Post[]>;

  constructor(private _authState: AuthStateService,
   private _postService: PostService) {}

  ngOnInit(): void {
    this.currentUser$ = this._authState.currentUser$;
    this.posts$ = this._postService.getAllPostsForCurrentUser();
  }
}
