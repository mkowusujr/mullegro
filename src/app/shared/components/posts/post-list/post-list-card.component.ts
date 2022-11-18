import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/interfaces/post';

@Component({
  selector: 'post-list-card',
  template: `
    <a
      [routerLink]="[postRoute]"
      routerLinkActive="active"
      class="post-list-card"
    >
      <img class="post-image" [src]="post.display_picture" />
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
  @Input() post!: IPost;
  postRoute = '';

  ngOnInit(): void {
    this.postRoute = `/post/${this.post.id}`;
  }
}
