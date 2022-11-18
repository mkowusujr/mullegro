import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';
import { ReviewModule } from 'src/app/shared/components/reviews/review/review.module';

import { AddReviewFormComponent } from './add-review-form.component';

@NgModule({
  declarations: [AddReviewFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReviewModule,
    StarRatingModule.forRoot()
  ],
  exports: [AddReviewFormComponent]
})
export class AddReviewModule {}
