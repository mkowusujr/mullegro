import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostPageModule } from './post-page/post-page.module';
import { PostListPageModule } from './post-list-page/post-list-page.module';

import { PostPageComponent } from './post-page/post-page.component';
import { PostListPageComponent } from './post-list-page/post-list-page.component';

const routes: Routes = [
  { path: 'post/:id', component: PostPageComponent },
  { path: 'posts', component: PostListPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), PostPageModule, PostListPageModule],
  exports: [RouterModule]
})
export class PostPagesRoutingModule {}
