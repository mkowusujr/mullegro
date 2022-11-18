import { Component, Input } from '@angular/core';
import { IUserStats } from 'src/app/core/interfaces/user-stats';

@Component({
  selector: 'user-sales-stats',
  template: `
    <ng-container *ngIf="userStats">
      <star-rating
        [labelText]="'Average Rating: ' + userStats.averageRating.toString()"
        [starType]="'svg'"
        [rating]="userStats.averageRating"
        [showHalfStars]="true"
        [readOnly]="true"
      >
      </star-rating>
      <p>Amount Of Posts Sold: {{ userStats.totalPostsSold }}</p>
      <p>Amount Of Posts Created: {{ userStats.totalPostsMade }}</p>
      <p>
        Amount Of Posts Avaialbe For Sale:
        {{ userStats.totalPostsAvailable }}
      </p>
    </ng-container>
  `
})
export class UserSalesStatsComponent {
  @Input() userStats!: IUserStats | null;
}
