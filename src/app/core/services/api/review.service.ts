import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../../interfaces/review';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  baseUrl = '/reviews';

  constructor(private _apiService: ApiService) {}

  createReview(newReview: Review): Observable<Review> {
    const createReviewEndpoint = `/user/reviews`;
    return this._apiService.postRequest(createReviewEndpoint, newReview);
  }

  updateReview(reviewId: number, updatedReview: Review): Observable<Review> {
    const updateReviewEndpoint = `/review/${reviewId}`;
    return this._apiService.putRequest(updateReviewEndpoint, updatedReview);
  }

  getReview(reviewId: number): Observable<Review> {
    const getReviewEndpoint = `/review/${reviewId}`;
    return this._apiService.getRequest(getReviewEndpoint);
  }

  getAllReviewsMadeByUser(username: string): Observable<Review> {
    const getAllReviewsMadeByUserEndpoint = `/user/${username}/reviews`;
    return this._apiService.getRequest(getAllReviewsMadeByUserEndpoint);
  }

  getAllReviewsFromPostsMadeByUser(username: string): Observable<Review> {
    const getAllReviewsFromPostsMadeByUserEndpoint = `/user/${username}/posts/reviews`;
    return this._apiService.getRequest(
      getAllReviewsFromPostsMadeByUserEndpoint
    );
  }

  getStatsForUser(username: string): Observable<Review> {
    const getStatsForUserEndpoint = `/user/${username}/stats`;
    return this._apiService.getRequest(getStatsForUserEndpoint);
  }
}
