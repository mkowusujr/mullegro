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
  <a [routerLink]="[postRoute]" routerLinkActive="active">
    <p>post-list-card works!</p> 
  </a>
  
  `
})
export class PostListCardComponent implements OnInit {
  @Input() post!: Post;
  postRoute = '';

  ngOnInit(): void {
    console.log('one post ' + this.post);
    this.postRoute = `/post/${this.post.id}`;
  }
}
