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

  getPost(postId: number): Observable<Post> {
    const getPostEndpoint = `${this.baseUrl}/post/${postId}`;
    return this._api.getRequest(getPostEndpoint);
  }

  updatePostStatus(postId: number, newStatus: object): Observable<Post> {
    const updatePostStatusEndpoint = `${this.baseUrl}/post/${postId}`;
    return this._api.putRequest(updatePostStatusEndpoint, newStatus);
  }
}
