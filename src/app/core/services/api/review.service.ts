import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../../interfaces/review';
import { UserStats } from '../../interfaces/user-stats';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  baseUrl = '/reviews';

  constructor(private _apiService: ApiService) {}

  createReview(newReview: Review): Observable<Review> {
    const createReviewEndpoint = `${this.baseUrl}/user/reviews`;
    return this._apiService.postRequest(createReviewEndpoint, newReview);
  }

  updateReview(reviewId: number, updatedReview: Review): Observable<Review> {
    const updateReviewEndpoint = `${this.baseUrl}/review/${reviewId}`;
    return this._apiService.putRequest(updateReviewEndpoint, updatedReview);
  }

  getReview(reviewId: number): Observable<Review> {
    const getReviewEndpoint = `${this.baseUrl}/review/${reviewId}`;
    return this._apiService.getRequest(getReviewEndpoint);
  }

  getReviewBelongingToPost(postId: number): Observable<Review> {
    const getReviewBelongingToPostEndpoint = `${this.baseUrl}/post/${postId}/review`;
    return this._apiService.getRequest(getReviewBelongingToPostEndpoint);
  }

  getAllReviewsMadeByUser(username: string): Observable<Review> {
    const getAllReviewsMadeByUserEndpoint = `${this.baseUrl}/user/${username}/reviews`;
    return this._apiService.getRequest(getAllReviewsMadeByUserEndpoint);
  }

  getAllReviewsFromPostsMadeByUser(username: string): Observable<Review[]> {
    const getAllReviewsFromPostsMadeByUserEndpoint = `${this.baseUrl}/user/${username}/posts/reviews`;
    return this._apiService.getRequest(
      getAllReviewsFromPostsMadeByUserEndpoint
    );
  }

  getStatsForUser(username: string): Observable<UserStats> {
    const getStatsForUserEndpoint = `${this.baseUrl}/user/${username}/stats`;
    return this._apiService.getRequest(getStatsForUserEndpoint);
  }
}
