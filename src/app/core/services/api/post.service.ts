import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../interfaces/post';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = '/posts';

  constructor(private _api: ApiService) {}

  getAllPostsForCurrentUser(): Observable<Post[]> {
    const getAllPostsForCurrentUserEndpoint = `${this.baseUrl}/user/posts`;
    return this._api.getRequest(getAllPostsForCurrentUserEndpoint);
  }

  createPost(newPost: Post): Observable<Post> {
    const createPostEndpoint = `${this.baseUrl}/user/posts`;
    return this._api.postRequest(createPostEndpoint, newPost);
  }

  deletePost(postId: number): Observable<Post> {
    const deletePostEndpoint = `${this.baseUrl}/user/posts/post/${postId}`;
    return this._api.deleteRequest(deletePostEndpoint);
  }

  getAllPosts(): Observable<Post[]> {
    const getAllPostsEndpoint = `${this.baseUrl}`;
    return this._api.getRequest(getAllPostsEndpoint);
  }

  getAllPostsForUser(username: string): Observable<Post[]> {
    const getAllPostsForUserEndpoint = `${this.baseUrl}/users/user/${username}/posts`;
    return this._api.getRequest(getAllPostsForUserEndpoint);
  }

  getPostsOfCategory(category: string): Observable<Post[]> {
    const getPostsOfCategoryEndpoint = `${this.baseUrl}/filter?category=${category}`;
    return this._api.getRequest(getPostsOfCategoryEndpoint);
  }

  getPost(postId: number): Observable<Post> {
    const getPostEndpoint = `${this.baseUrl}/post/${postId}`;
    return this._api.getRequest(getPostEndpoint);
  }

  updatePostStatus(postId: number, newStatus: object): Observable<Post> {
    const updatePostStatusEndpoint = `${this.baseUrl}/post/${postId}`;
    return this._api.putRequest(updatePostStatusEndpoint, newStatus);
  }

  getFilteredPosts(
    queryCategory: string | null,
    queryCondition: string | null
  ): Observable<Post[]> {
    let getFilteredPostsEndpoint;
    if (queryCategory) {
      getFilteredPostsEndpoint = `${this.baseUrl}/filter?category=${queryCategory}`;
    } else {
      getFilteredPostsEndpoint = `${this.baseUrl}/filter?condition=${queryCondition}`;
    }

    return this._api.getRequest(getFilteredPostsEndpoint);
  }

  getFilterCategoryNames(): Observable<string[]> {
    const getFilterCategoryNamesEndpoint = `${this.baseUrl}/filter/category/names`;
    return this._api.getRequest(getFilterCategoryNamesEndpoint);
  }

  getFilterConditionNames(): Observable<string[]> {
    const getFilterConditionNamesEndpoint = `${this.baseUrl}/filter/condition/names`;
    return this._api.getRequest(getFilterConditionNamesEndpoint);
  }

  findPostWithSearchQuery(searchQuery: string): Observable<Post[]> {
    const findPostWithSearchQueryEndpoint = `${this.baseUrl}/search?query=${searchQuery}`;
    return this._api.getRequest(findPostWithSearchQueryEndpoint);
  }
}
