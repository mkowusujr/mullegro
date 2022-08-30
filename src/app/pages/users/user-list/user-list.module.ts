import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListCardComponent } from './user-list-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserListComponent, UserListCardComponent],
  imports: [CommonModule, RouterModule]
})
export class UserListModule {}
