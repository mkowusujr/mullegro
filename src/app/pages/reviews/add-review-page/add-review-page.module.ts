import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddReviewPageComponent } from './add-review-page.component';
import { PostDetailsModule } from 'src/app/shared/components/posts/post-details/post-details.module';
import { LayoutsModule } from 'src/app/shared/layouts/layouts.module';
import { AddReviewFormComponent } from './add-review-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewModule } from 'src/app/shared/components/reviews/review/review.module';



@NgModule({
  declarations: [AddReviewPageComponent, AddReviewFormComponent],
  imports: [CommonModule, PostDetailsModule, LayoutsModule, FormsModule, ReactiveFormsModule,
  ReviewModule]
})
export class AddReviewModule {}
