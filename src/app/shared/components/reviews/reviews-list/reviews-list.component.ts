import { Component, Input } from '@angular/core';
import { Review } from 'src/app/core/interfaces/review';

@Component({
  selector: 'review-list',
  template: `
    <ng-container *ngIf="reviews;else noReviewsTemplate">
      <ng-container *ngFor="let review of reviews">
        <review [review]="review"></review>
      </ng-container>
    </ng-container>
    <ng-template #noReviewsTemplate>
      <span>No reviews have been made on this user's posts.</span>
    </ng-template>
  `,
  styles: [
  ]
})
export class ReviewsListComponent {
  @Input() reviews!: Review[] | null;
}
