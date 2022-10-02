import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Post } from 'src/app/core/interfaces/post';
import { PostService } from 'src/app/core/services/api/post.service';
import { FilterPostService } from './filter-post.service';

@Component({
  selector: 'post-list-page',
  template: `
    <input type="text" placeholder="Search for Posts" (keyup)="onKey($event)" />
    <ng-container *ngIf="(posts$ | async)?.length != 0; else notFound">
      <ng-container *ngFor="let post of posts$ | async">
        <post-list-card [post]="post"></post-list-card>
      </ng-container>
    </ng-container>
    <ng-template #notFound>
      <h1>No {{ filter }} Posts Found At The Moment</h1>
    </ng-template>
  `
})
export class PostListPageComponent implements OnInit {
  posts$!: Observable<Post[]>;
  filter!: string | undefined;

  constructor(
    private _postService: PostService,
    private route: ActivatedRoute,
    private _filterPostsService: FilterPostService
  ) {
    this.applyFiltersFromUrlParams();
  }

  ngOnInit(): void {
    this.posts$ = this._filterPostsService.filteredPosts$;
  }

  applyFiltersFromUrlParams() {
    this.route.queryParams.subscribe(params => {
      this.applyCategoryFilterFromUrlParams(params['category']);
      this.applyConditionFilterFromUrlParams(params['condition']);
      this.applySearchQueryFromUrlParams(params['searchQuery'])
    });
  }

  applyCategoryFilterFromUrlParams(categoryParam: any) {
    if (categoryParam) {
      let categories =
      categoryParam instanceof Object
          ? categoryParam
          : [categoryParam];
      this._filterPostsService.setCategoryFilters(categories);
      this.filter = categories;
    }
    else {
      this._filterPostsService.resetCategoryFilters();
    }
  }

  applyConditionFilterFromUrlParams(conditionParam: any) {
    if (conditionParam) {
      let conditions =
      conditionParam instanceof Object
          ?conditionParam
          : [conditionParam];
      this._filterPostsService.setConditionFilters(conditions);
      this.filter = conditions;
    }
    else {
      this._filterPostsService.resetConditionFilters();
    }
  }

  applySearchQueryFromUrlParams(searchQueryParam: any) {
    if (searchQueryParam) {
      this._filterPostsService.setSearchQuery(searchQueryParam);
    }
    else {
      this._filterPostsService.setSearchQuery('');
    }
  }

  onKey(event: any) {
    this._filterPostsService.setSearchQuery(event.target.value);
  }
}
