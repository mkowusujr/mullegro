import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/core/services/api/post.service';

@Component({
  selector: 'category',
  template: `
    <h1>Category Page</h1>
    <div class="category-grid">
      <ng-container *ngFor="let category of (categoryList$ | async)">
        <p class="card-y hover-card">{{category}}</p>
      </ng-container>
    </div>
  `
})
export class CategoryComponent implements OnInit {
  categoryList$!: Observable<string[]>;

  constructor(private _postService: PostService) {}

  ngOnInit(): void {
    this.categoryList$ = this._postService.getFilterCategoryNames();
  }
}
