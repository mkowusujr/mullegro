import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Post } from '../../../core/interfaces/post';
import { PostService } from '../../../core/services/api/post.service';

@Injectable({
  providedIn: 'root'
})
export class FilterPostService {
  categoryFilters: string[] = [];
  conditionFilters: string[] = [];
  searchQuery: string = '';

  private _filteredPosts: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>(
    []
  );
  filteredPosts$: Observable<Post[]> = this._filteredPosts.asObservable();

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

  setConditionFilters(categories: string[]) {
    this.categoryFilters = categories;
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
    console.log(this.categoryFilters);
    console.log(this.conditionFilters);
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
