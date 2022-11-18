import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from 'angular-star-rating';
import { UserSalesStatsComponent } from './user-sales-stats.component';

@NgModule({
  declarations: [UserSalesStatsComponent],
  imports: [CommonModule, StarRatingModule.forRoot()],
  exports: [UserSalesStatsComponent]
})
export class UserSalesStatsModule {}
