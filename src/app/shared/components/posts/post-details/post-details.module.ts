import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './post-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PostDetailsComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [PostDetailsComponent]
})
export class PostDetailsModule { }
