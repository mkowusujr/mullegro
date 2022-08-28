import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Post } from 'src/app/core/interfaces/post';

@Component({
  selector: 'post-list-card',
  template: `
    <a
      [routerLink]="[postRoute]"
      routerLinkActive="active"
      class="post-list-card"
    >
      <p>Post Image</p>
      <div>
        <ul>
          <li>{{ post.title }}</li>
          <li>{{ post.type }}</li>
          <li>{{ post.condition }}</li>
          <li>{{ post.price | currency }}</li>
        </ul>
      </div>
    </a>
  `
})
export class PostListCardComponent implements OnInit {
  @Input() post!: Post;
  postRoute = '';

  ngOnInit(): void {
    this.postRoute = `/post/${this.post.id}`;
  }
}
