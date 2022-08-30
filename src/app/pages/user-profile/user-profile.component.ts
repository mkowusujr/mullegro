import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Post } from 'src/app/core/interfaces/post';
import { User } from 'src/app/core/interfaces/user';
import { PostService } from 'src/app/core/services/api/post.service';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'user-profile',
  template: `
    <three-column-display>
      <user-profile-avatar
        col1
        [avatarImg]="(currentUser$ | async)?.profile_picture"
        [userUsername]="(currentUser$ | async)?.username"
        [userName]="(currentUser$ | async)?.name"
      ></user-profile-avatar>

      <user-profile-details col2>
        {{ (currentUser$ | async)?.bio }}
      </user-profile-details>

      <post-list col3 [posts]="posts$ | async" [header]="header"></post-list>
    </three-column-display>
  `
})
export class UserProfileComponent implements OnInit {
  currentUser$!: Observable<User | undefined>;
  posts$!: Observable<Post[]>;
  header!: string;

  constructor(
    private _userService: UserService,
    private _postService: PostService,
    private route: ActivatedRoute,
    private _router: Router
  ) {}

  getUsernameFromParams(): string {
    let username = '';
    this.route.params
      .pipe(take(1))
      .subscribe(params => (username = params['username']));
    return username;
  }

  getUsersPosts() {
    this.posts$ = this._postService.getAllPostsForUser(
      this.getUsernameFromParams()
    );
  }

  setCurrentUserAndPosts(currentUser: User) {
    this.currentUser$ = new Observable(observer => {
      observer.next(currentUser);
      observer.complete();
    });
    this.getUsersPosts();
    this.header = `Posts by ${currentUser.username}`;
  }

  ngOnInit(): void {
    this._userService
      .getUser(this.getUsernameFromParams())
      .pipe(take(1))
      .subscribe({
        next: currentUser => this.setCurrentUserAndPosts(currentUser),
        error: _ => this._router.navigate([''])
      });
  }
}
