import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/core/interfaces/post';

@Component({
  selector: 'post-list',
  template: `
    <h1>{{ header }}</h1>

    <div class="post-list-items">
      <ng-container *ngFor="let post of posts">
        <post-list-card [post]="post"></post-list-card>
      </ng-container>
    </div>
  `
})
export class PostListComponent {
  @Input() posts!: IPost[] | null;
  @Input() header?: string;
}
