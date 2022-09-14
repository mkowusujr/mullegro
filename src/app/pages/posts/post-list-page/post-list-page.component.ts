import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/interfaces/post';
import { PostService } from 'src/app/core/services/api/post.service';

@Component({
  selector: 'app-post-list-page',
  template: `
    <ng-container *ngFor="let post of posts$ | async">
      <post-list-card [post]="post"></post-list-card>
    </ng-container>
  `,
  styles: []
})
export class PostListPageComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private _postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this._postService.getAllPosts();
  }
}
