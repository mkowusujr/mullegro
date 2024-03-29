import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { RouterModule } from '@angular/router';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [CommonModule, RouterModule, CategoryRoutingModule]
})
export class CategoryModule {}
