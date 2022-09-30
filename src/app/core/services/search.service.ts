import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Post } from '../interfaces/post';
import { SearchResults } from '../interfaces/searchResults';
import { User } from '../interfaces/user';
import { PostService } from './api/post.service';
import { UserService } from './api/user.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private _userService: UserService,
    private _postService: PostService
  ) { }

  searchDB(query: string): SearchResults {
    let foundUsers: User[] = [];
    let foundPosts: Post[] = [];

    this._userService.findUsersWithSearchQuery(query).pipe(take(1)).subscribe(users => foundUsers = users);
    this._postService.findPostWithSearchQuery(query).pipe(take(1)).subscribe(posts => foundPosts = posts);
    
    let searchResults = {
      foundUsers: foundUsers,
      foundPosts: foundPosts
    };

    return searchResults;
  }
}
