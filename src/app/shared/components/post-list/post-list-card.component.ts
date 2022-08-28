import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Post } from 'src/app/core/interfaces/post';

@Component({
  selector: 'post-list-card',
  template: `
 
    <p>
      post-list-card works!
    </p>
  `
})
export class PostListCardComponent implements OnInit {

  @Input() post!: Post;
  // postRoute = `/post/${this.post.id}`;

  ngOnInit(): void {
    console.log('one post ' + this.post)
  }
}
