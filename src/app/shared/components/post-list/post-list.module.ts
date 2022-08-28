import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { PostListCardComponent } from './post-list-card.component';


@NgModule({
  declarations: [PostListComponent, PostListCardComponent],
  imports: [
    CommonModule
  ],
  exports: [PostListComponent]
})
export class PostListModule { }
