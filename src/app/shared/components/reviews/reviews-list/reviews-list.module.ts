import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewModule } from '../review/review.module';
import { ReviewsListComponent } from './reviews-list.component';

@NgModule({
  declarations: [ReviewsListComponent],
  imports: [CommonModule, ReviewModule],
  exports: [ReviewsListComponent]
})
export class ReviewListModule {}
