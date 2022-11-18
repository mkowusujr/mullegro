import { Component, Input } from '@angular/core';
import { IReview } from 'src/app/core/interfaces/review';

@Component({
  selector: 'review',
  template: `
    <ng-container *ngIf="review">
      <h1>Created on {{ review.createdAt | date }}</h1>
      <star-rating
        [labelText]="'Rating: ' + review.rating.toString()"
        [starType]="'svg'"
        [rating]="review.rating"
        [showHalfStars]="true"
        [readOnly]="true"
        [disabled]="true"
      >
      </star-rating>
      <p>{{ review.description }}</p>
    </ng-container>
  `
})
export class ReviewComponent {
  @Input() review!: IReview | null;
  @Input() postId!: number;
}
