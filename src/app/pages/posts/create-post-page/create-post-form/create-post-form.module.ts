import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostFormComponent } from './create-post-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreatePostFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CreatePostFormComponent]
})
export class CreatePostFormModule {}
