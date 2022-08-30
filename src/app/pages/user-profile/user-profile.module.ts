import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { ThreeColumnDisplayComponent } from 'src/app/shared/layouts/three-column-display/three-column-display.component';
import { PostListModule } from 'src/app/shared/components/post-list/post-list.module';
import { UserProfileDetailsComponent } from './user-profile-details.component';
import { UserProfileSummaryComponent } from './user-profile-summary.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    ThreeColumnDisplayComponent,
    UserProfileDetailsComponent,
    UserProfileSummaryComponent
  ],
  imports: [CommonModule, PostListModule]
})
export class UserProfileModule {}
