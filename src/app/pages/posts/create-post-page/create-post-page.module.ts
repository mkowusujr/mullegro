import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostPageComponent } from './create-post-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreatePostPageComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class CreatePostPageModule {}
