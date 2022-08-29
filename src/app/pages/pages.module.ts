import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { UserProfileModule } from './user-profile/user-profile.module';

@NgModule({
  imports: [CommonModule, PagesRoutingModule, UserProfileModule],
  declarations: [HomeComponent]
})
export class PagesModule {}
