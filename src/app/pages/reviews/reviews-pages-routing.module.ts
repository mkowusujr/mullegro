import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddReviewModule } from './add-review-page/add-review-page.module';
import { AddReviewPageComponent } from './add-review-page/add-review-page.component';

const routes: Routes = [
  {
    path: 'transactions/transaction/:transactionId/posts/post/:postId',
    component: AddReviewPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), AddReviewModule],
  exports: [RouterModule]
})
export class ReviewsPagesRoutingModule {}
