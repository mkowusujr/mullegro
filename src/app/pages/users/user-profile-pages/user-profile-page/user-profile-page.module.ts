import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsModule } from 'src/app/shared/layouts/layouts.module';
import { PostListModule } from 'src/app/shared/components/post-list/post-list.module';

import { UserProfilePageComponent } from './user-profile-page.component';
import { UserProfilePageDetailsComponent } from './user-profile-page-details.component';
import { UserProfilePageSummaryComponent } from './user-profile-page-summary.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserProfilePageComponent,
    UserProfilePageDetailsComponent,
    UserProfilePageSummaryComponent
  ],
  imports: [CommonModule, RouterModule, PostListModule, LayoutsModule]
})
export class UserProfilePageModule {}
