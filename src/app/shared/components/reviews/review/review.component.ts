import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from 'src/app/core/interfaces/review';
import { ReviewService } from 'src/app/core/services/api/review.service';

@Component({
  selector: 'review',
  template: `
  <ng-container *ngIf="review$ | async">
    <h1>Created on {{ (review$ | async)?.createdAt | date }}</h1>
    <p>Rating {{ (review$ | async)?.rating }}</p>
    <p>{{ (review$ | async)?.description }}</p>
  </ng-container>
  `
})
export class ReviewComponent implements OnInit {
  review$!: Observable<Review>;
  @Input() postId!: number;

  constructor(private _reviewService: ReviewService) {}

  ngOnInit(): void {
    this.review$ = this._reviewService.getReviewBelongingToPost(this.postId);
  }
}
