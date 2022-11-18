import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from 'angular-star-rating';

import { ReviewComponent } from './review.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [ReviewComponent],
  imports: [CommonModule, RouterModule, StarRatingModule.forRoot()],
  exports: [ReviewComponent]
})
export class ReviewModule {}
