import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsPagesRoutingModule } from './reviews-pages-routing.module';
import { ReviewPageComponent } from './review-page.component';
import { LayoutsModule } from 'src/app/shared/layouts/layouts.module';
import { PostDetailsModule } from 'src/app/shared/components/posts/post-details/post-details.module';
import { ReviewModule } from 'src/app/shared/components/reviews/review/review.module';
import { AddReviewModule } from './add-review/add-review-page.module';

@NgModule({
  declarations: [ReviewPageComponent],
  imports: [
    CommonModule,
    ReviewsPagesRoutingModule,
    LayoutsModule,
    PostDetailsModule,
    ReviewModule,
    AddReviewModule
  ]
})
export class ReviewsPagesModule {}
