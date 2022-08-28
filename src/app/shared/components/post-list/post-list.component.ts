import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Post } from 'src/app/core/interfaces/post';

@Component({
  selector: 'post-list',
  template: `
    <div *ngFor="let post of posts">
      <post-list-card [post]="post"></post-list-card>
    </div>
  `
})
export class PostListComponent implements OnInit {
  @Input() posts!: Post[] | null;

  ngOnInit(): void {
    console.log('all posts ' + this.posts)
  }
}
