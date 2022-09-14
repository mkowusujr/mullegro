import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListModule } from 'src/app/shared/components/post-list/post-list.module';
import { PostListPageComponent } from './post-list-page.component';

@NgModule({
  declarations: [PostListPageComponent],
  imports: [CommonModule, PostListModule]
})
export class PostListPageModule {}
