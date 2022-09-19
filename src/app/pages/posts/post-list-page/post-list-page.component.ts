import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Post } from 'src/app/core/interfaces/post';
import { PostService } from 'src/app/core/services/api/post.service';

@Component({
  selector: 'post-list-page',
  template: `
    <ng-container *ngIf="(posts$ | async)?.length != 0; else notFound">
      <ng-container *ngFor="let post of posts$ | async">
        <post-list-card [post]="post"></post-list-card>
      </ng-container>
    </ng-container>
    <ng-template #notFound>
      <h1>No {{filter}} Posts Found At The Moment</h1>
    </ng-template>
  `,
  styles: []
})
export class PostListPageComponent implements OnInit {
  posts$!: Observable<Post[]>;
  filter!: string | undefined;

  constructor(
    private _postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(take(1)).subscribe(params => {
      if (params['category']) {
        this.posts$ = this._postService.getFilteredPosts(
          params['category'],
          null
        );
        this.filter = params['category'];
      } else if (params['condition']) {
        this.posts$ = this._postService.getFilteredPosts(
          null,
          params['condition']
        );
        this.filter = params['condition'];
      } else {
        this.posts$ = this._postService.getAllPosts();
      }
    });
  }
}