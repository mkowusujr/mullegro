import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStats } from 'src/app/core/interfaces/user-stats';
import { ReviewService } from 'src/app/core/services/api/review.service';

@Component({
  selector: 'user-sales-stats',
  template: `
    <p>Average Rating: {{ (userStats | async)?.averageRating }}</p>
    <p>Amount Of Posts Sold: {{ (userStats | async)?.totalPostsSold }}</p>
    <p>Amount Of Posts Created: {{ (userStats | async)?.totalPostsMade }}</p>
    <p>Amount Of Posts Avaialbe For Sale: {{ (userStats | async)?.totalPostsAvailable }}</p>
  `
})
export class UserSalesStatsComponent implements OnInit {
  @Input() username!: string | undefined;
  userStats!: Observable<UserStats>;

  constructor(private _reviewService: ReviewService) {

  }
  
  ngOnInit(): void {
    this.userStats = this._reviewService.getStatsForUser(this.username ?? '');
  }
}
