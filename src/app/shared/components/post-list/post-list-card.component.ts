import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/core/interfaces/post';

@Component({
  selector: 'post-list-card',
  template: `
    <a
      [routerLink]="[postRoute]"
      routerLinkActive="active"
      class="post-list-card"
    >
      <p class="post-image">Post Image</p>
      <div class="post-details">
        <ul>
          <li>{{ post.title }}</li>
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
