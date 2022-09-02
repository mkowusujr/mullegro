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
      <p #type>{{ post?.type }}</p>
    </div>

    <div>
      <label for="#description">Description</label>
      <p #description>{{ post?.description }}</p>
    </div>

    <post-add-to-cart [post]="post"></post-add-to-cart>
  `,
  styles: []
})
export class PostDetailsComponent implements OnInit {
  @Input() post!: Post | null;

  constructor() {}

  ngOnInit(): void {}
}
