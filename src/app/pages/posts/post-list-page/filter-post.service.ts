import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { IPost } from '../../../core/interfaces/post';
import { PostService } from '../../../core/services/api/post.service';

@Injectable({
  providedIn: 'root'
})
export class FilterPostService {
  categoryFilters: string[] = [];
  conditionFilters: string[] = [];
  searchQuery: string = '';

  private _filteredPosts: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>(
    []
  );
  filteredPosts$: Observable<IPost[]> = this._filteredPosts.asObservable();

  constructor(private _postService: PostService) {
    this._postService
      .getAllPosts()
      .pipe(take(1))
      .subscribe(posts => this._filteredPosts.next(posts));
  }

  setCategoryFilters(categories: string[]) {
    this.categoryFilters = categories;
    this.setFilteredPosts();
  }

  setConditionFilters(conditions: string[]) {
    this.conditionFilters = conditions;
    this.setFilteredPosts();
  }

  setSearchQuery(searchQuery: string) {
    this.searchQuery = searchQuery;
    this.setFilteredPosts();
  }

  resetCategoryFilters() {
    this.categoryFilters = [];
    this.setFilteredPosts();
  }

  resetConditionFilters() {
    this.conditionFilters = [];
    this.setFilteredPosts();
  }

  setFilteredPosts() {
    this._postService
      .findPostWithSearchQuery(this.searchQuery)
      .pipe(take(1))
      .subscribe(posts => {
        let filteredPosts = posts.filter(
          post =>
            (this.categoryFilters.length == 0 ||
              this.categoryFilters.includes(post.category)) &&
            (this.conditionFilters.length == 0 ||
              this.conditionFilters.includes(post.condition))
        );
        this._filteredPosts.next(filteredPosts);
      });
  }
}
