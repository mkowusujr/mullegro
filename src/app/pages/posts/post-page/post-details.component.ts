import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/core/interfaces/post';

@Component({
  selector: 'post-details',
  template: `
    <p>{{ post?.title }}</p>
    <p>{{ post?.condition }}</p>
    <p>{{ post?.type }}</p>
    <p>{{ post?.price | currency }}</p>
    <p>{{ post?.description }}</p>
  `,
  styles: []
})
export class PostDetailsComponent implements OnInit {
  @Input() post!: Post | null;

  constructor() {}

  ngOnInit(): void {}
}
