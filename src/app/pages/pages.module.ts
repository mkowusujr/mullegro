import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile/user-profile.component';

@NgModule({
  imports: [CommonModule, PagesRoutingModule],
  declarations: [HomeComponent, UserProfileComponent]
})
export class PagesModule {}
