import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Post } from 'src/app/core/interfaces/post';
import { PostService } from 'src/app/core/services/api/post.service';

@Component({
  selector: 'post',
  template: `
    <three-column-display>
      <post-details col2 [post]="post | async"></post-details>
      <post-list col3 [posts]="[]" [header]="'Other Posts'"></post-list>
    </three-column-display>
  `
})
export class PostPageComponent implements OnInit {
  post!: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private _postService: PostService
  ) {}

  getIdFromParams(): number {
    let id = '';
    this.route.params.pipe(take(1)).subscribe(params => (id = params['id']));
    return +id;
  }

  ngOnInit(): void {
    this.post = this._postService.getPost(this.getIdFromParams());
  }
}
