import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from 'angular-star-rating';

import { ReviewComponent } from './review.component';
@NgModule({
  declarations: [ReviewComponent],
  imports: [CommonModule, StarRatingModule.forRoot()],
  exports: [ReviewComponent]
})
export class ReviewModule {}
