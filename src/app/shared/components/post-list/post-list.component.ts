import { Component, Input } from '@angular/core';
import { Post } from 'src/app/core/interfaces/post';

@Component({
  selector: 'post-list',
  template: `
    <div *ngFor="let post of posts">
      <post-list-card [post]="post"></post-list-card>
    </div>
  `
})
export class PostListComponent {
  @Input() posts!: Post[] | null;
}
