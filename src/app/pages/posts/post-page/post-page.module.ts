import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListModule } from 'src/app/shared/components/post-list/post-list.module';
import { LayoutsModule } from 'src/app/shared/layouts/layouts.module';

import { PostPageComponent } from './post-page.component';
import { PostDetailsComponent } from './post-details.component';
import { AddToCartComponent } from './add-to-cart.component';

@NgModule({
  declarations: [PostPageComponent, PostDetailsComponent, AddToCartComponent],
  imports: [CommonModule, PostListModule, LayoutsModule],
  exports: [PostPageComponent]
})
export class PostPageModule {}
