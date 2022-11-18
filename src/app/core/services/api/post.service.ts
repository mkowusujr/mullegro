import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../../interfaces/post';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = '/posts';

  constructor(private _api: ApiService) {}

  getAllPostsForCurrentUser(): Observable<IPost[]> {
    const getAllPostsForCurrentUserEndpoint = `${this.baseUrl}/user/posts`;
    return this._api.getRequest(getAllPostsForCurrentUserEndpoint);
  }

  createPost(newPost: IPost): Observable<IPost> {
    const createPostEndpoint = `${this.baseUrl}/user/posts`;
    return this._api.postRequest(createPostEndpoint, newPost);
  }

  deletePost(postId: number): Observable<IPost> {
    const deletePostEndpoint = `${this.baseUrl}/user/posts/post/${postId}`;
    return this._api.deleteRequest(deletePostEndpoint);
  }

  getAllPosts(): Observable<IPost[]> {
    const getAllPostsEndpoint = `${this.baseUrl}`;
    return this._api.getRequest(getAllPostsEndpoint);
  }

  getAllPostsForUser(username: string): Observable<IPost[]> {
    const getAllPostsForUserEndpoint = `${this.baseUrl}/users/user/${username}/posts`;
    return this._api.getRequest(getAllPostsForUserEndpoint);
  }

  getPostsOfCategory(category: string): Observable<IPost[]> {
    const getPostsOfCategoryEndpoint = `${this.baseUrl}/filter?category=${category}`;
    return this._api.getRequest(getPostsOfCategoryEndpoint);
  }

  getPost(postId: number): Observable<IPost> {
    const getPostEndpoint = `${this.baseUrl}/post/${postId}`;
    return this._api.getRequest(getPostEndpoint);
  }

  updatePostStatus(postId: number, newStatus: object): Observable<IPost> {
    const updatePostStatusEndpoint = `${this.baseUrl}/post/${postId}`;
    return this._api.putRequest(updatePostStatusEndpoint, newStatus);
  }

  getFilteredPosts(
    queryCategory: string | null,
    queryCondition: string | null
  ): Observable<IPost[]> {
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

  findPostWithSearchQuery(searchQuery: string): Observable<IPost[]> {
    const findPostWithSearchQueryEndpoint = `${this.baseUrl}/search?query=${searchQuery}`;
    return this._api.getRequest(findPostWithSearchQueryEndpoint);
  }
}
