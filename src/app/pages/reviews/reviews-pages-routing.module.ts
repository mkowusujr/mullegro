import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsModule } from 'src/app/shared/components/posts/post-details/post-details.module';
import { LayoutsModule } from 'src/app/shared/layouts/layouts.module';

import { ReviewPageComponent } from './review-page.component';

const routes: Routes = [
  {
    path: 'user/transactions/transaction/:transactionId/posts/post/:postId',
    component: ReviewPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), PostDetailsModule, LayoutsModule],
  exports: [RouterModule]
})
export class ReviewsPagesRoutingModule {}
