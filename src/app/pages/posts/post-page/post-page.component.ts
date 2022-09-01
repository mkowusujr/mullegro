import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Post } from 'src/app/core/interfaces/post';
import { PostService } from 'src/app/core/services/api/post.service';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'post',
  template: `
    <three-column-display>
      <post-details col2 [post]="post | async"></post-details>
      <post-list col3 [posts]="(posts | async)" [header]="'Other Posts'"></post-list>
    </three-column-display>
  `
})
export class PostPageComponent implements OnInit {
  post!: Observable<Post>;
  posts!: Observable<Post[]>;
  header!: string;

  constructor(
    private route: ActivatedRoute,
    private _postService: PostService,
    private _userService: UserService
  ) {}

  getIdFromParams(): number {
    let id = '';
    this.route.params.pipe(take(1)).subscribe(params => (id = params['id']));
    return +id;
  }

  getPostOwnerInfo(){
    this.post.pipe(take(1)).subscribe({
      next: post => this._userService.getUserById(post.userId)
        .pipe(take(1)).subscribe({
          next: user => {
            this.header = `Other posts by ${user.username}`;
            this.posts = this._postService.getAllPostsForUser(user.username);
          }
        })
    })
  }

  ngOnInit(): void {
    this.post = this._postService.getPost(this.getIdFromParams());
    this.getPostOwnerInfo();
  }
}
