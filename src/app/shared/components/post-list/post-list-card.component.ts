import { Component, Input } from '@angular/core';
import { Post } from 'src/app/core/interfaces/post';

@Component({
  selector: 'post-list-card',
  template: `
    <p>
      post-list-card works!
    </p>
  `
})
export class PostListCardComponent {
  @Input() post!: Post;
}
