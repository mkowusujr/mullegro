import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ThreeColumnDisplayComponent } from '../shared/layouts/three-column-display/three-column-display.component';
import { PostListModule } from '../shared/components/post-list/post-list.module';

@NgModule({
  imports: [CommonModule, PagesRoutingModule, PostListModule],
  declarations: [
    HomeComponent,
    UserProfileComponent,
    ThreeColumnDisplayComponent
  ]
})
export class PagesModule {}
