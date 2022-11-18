import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReview } from '../../interfaces/review';
import { IUserStats } from '../../interfaces/user-stats';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  baseUrl = '/reviews';

  constructor(private _apiService: ApiService) {}

  createReview(newReview: IReview): Observable<IReview> {
    const createReviewEndpoint = `${this.baseUrl}/user/reviews`;
    return this._apiService.postRequest(createReviewEndpoint, newReview);
  }

  updateReview(reviewId: number, updatedReview: IReview): Observable<IReview> {
    const updateReviewEndpoint = `${this.baseUrl}/review/${reviewId}`;
    return this._apiService.putRequest(updateReviewEndpoint, updatedReview);
  }

  getReview(reviewId: number): Observable<IReview> {
    const getReviewEndpoint = `${this.baseUrl}/review/${reviewId}`;
    return this._apiService.getRequest(getReviewEndpoint);
  }

  getReviewBelongingToPost(postId: number): Observable<IReview> {
    const getReviewBelongingToPostEndpoint = `${this.baseUrl}/post/${postId}/review`;
    return this._apiService.getRequest(getReviewBelongingToPostEndpoint);
  }

  getAllReviewsMadeByUser(username: string): Observable<IReview> {
    const getAllReviewsMadeByUserEndpoint = `${this.baseUrl}/user/${username}/reviews`;
    return this._apiService.getRequest(getAllReviewsMadeByUserEndpoint);
  }

  getAllReviewsFromPostsMadeByUser(username: string): Observable<IReview[]> {
    const getAllReviewsFromPostsMadeByUserEndpoint = `${this.baseUrl}/user/${username}/posts/reviews`;
    return this._apiService.getRequest(
      getAllReviewsFromPostsMadeByUserEndpoint
    );
  }

  getStatsForUser(username: string): Observable<IUserStats> {
    const getStatsForUserEndpoint = `${this.baseUrl}/user/${username}/stats`;
    return this._apiService.getRequest(getStatsForUserEndpoint);
  }
}
