import { Component, Input } from '@angular/core';
import { Post } from 'src/app/core/interfaces/post';

@Component({
  selector: 'post-list-card',
  template: `
  <a [routerLink]="[(postRoute)]" routerLinkActive="active">
    <p>
      post-list-card works!
    </p>
  </a>
  `
})
export class PostListCardComponent {
  @Input() post!: Post;
  postRoute = `/post/${this.post.id}`;
}
