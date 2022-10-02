import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/core/interfaces/post';

@Component({
  selector: 'post-details',
  template: `
    <div>
      <h2>{{ post?.title }}</h2>
      <p>{{ post?.price | currency }}</p>
    </div>

    <div>
      <label for="#condition">Condition</label>
      <p #conditon>{{ post?.condition }}</p>
    </div>

    <div>
      <label for="#type">Type</label>
      <p #type>{{ post?.category }}</p>
    </div>

    <div>
      <label for="#description">Description</label>
      <p #description>{{ post?.description }}</p>
    </div>

    <div>
      <label for="#owner">Posted By</label>
      <a #owner [routerLink]="['/user/' + username]" routerLinkActive="active">
        {{ username }}
      </a>
    </div>

    <div>
      <label for="#createdDate">Posted On</label>
      <p #createdDate>{{ post?.createdAt | date }}</p>
    </div>

    <post-add-to-cart [post]="post"></post-add-to-cart>
  `,
  styles: []
})
export class PostDetailsComponent implements OnInit {
  @Input() post!: Post | null;
  @Input() username!: string | null;
  constructor() {}

  ngOnInit(): void {}
}
