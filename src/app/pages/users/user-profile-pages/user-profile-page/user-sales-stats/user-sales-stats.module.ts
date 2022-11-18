import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSalesStatsComponent } from './user-sales-stats.component';



@NgModule({
  declarations: [
    UserSalesStatsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [UserSalesStatsComponent]
})
export class UserSalesStatsModule { }
