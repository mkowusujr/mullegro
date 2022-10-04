import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostDetailsModule } from 'src/app/shared/components/posts/post-details/post-details.module';
import { PostListModule } from 'src/app/shared/components/posts/post-list/post-list.module';
import { LayoutsModule } from 'src/app/shared/layouts/layouts.module';

import { PostPageComponent } from './post-page.component';
import { AddToCartComponent } from './add-to-cart.component';

@NgModule({
  declarations: [PostPageComponent, AddToCartComponent],
  imports: [
    CommonModule,
    PostDetailsModule,
    PostListModule,
    LayoutsModule,
    RouterModule
  ],
  exports: [PostPageComponent]
})
export class PostPageModule {}
