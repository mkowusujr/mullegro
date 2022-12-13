import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostPageComponent } from './create-post-page.component';
import { CreatePostFormModule } from './create-post-form/create-post-form.module';


@NgModule({
  declarations: [CreatePostPageComponent],
  imports: [CommonModule, CreatePostFormModule]
})
export class CreatePostPageModule {}
