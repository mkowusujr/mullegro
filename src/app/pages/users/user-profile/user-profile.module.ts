import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsModule } from 'src/app/shared/layouts/layouts.module';
import { PostListModule } from 'src/app/shared/components/post-list/post-list.module';

import { UserProfileComponent } from './user-profile.component';
import { UserProfileDetailsComponent } from './user-profile-details.component';
import { UserProfileSummaryComponent } from './user-profile-summary.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileDetailsComponent,
    UserProfileSummaryComponent
  ],
  imports: [CommonModule, PostListModule, LayoutsModule]
})
export class UserProfileModule {}
