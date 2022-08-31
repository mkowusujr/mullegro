import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostPagesRoutingModule } from './post-pages-routing.module';
import { PostPageComponent } from './post-page.component';

@NgModule({
  declarations: [PostPageComponent],
  imports: [CommonModule, PostPagesRoutingModule]
})
export class PostPagesModule {}
