import { Component, Input } from '@angular/core';
import { IReview } from 'src/app/core/interfaces/review';

@Component({
  selector: 'review',
  template: `
  <ng-container *ngIf="review">
    <h1>Created on {{ review.createdAt | date }}</h1>
    <p>Rating {{ review.rating }}</p>
    <p>{{ review.description }}</p>
  </ng-container>
  `
})
export class ReviewComponent {
  @Input() review!: IReview | null;
  @Input() postId!: number;
}
