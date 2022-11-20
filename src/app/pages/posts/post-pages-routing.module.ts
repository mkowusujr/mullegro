import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostPageModule } from './post-page/post-page.module';
import { PostListPageModule } from './post-list-page/post-list-page.module';

import { PostPageComponent } from './post-page/post-page.component';
import { PostListPageComponent } from './post-list-page/post-list-page.component';
import { CreatePostPageModule } from './create-post-page/create-post-page.module';
import { CreatePostPageComponent } from './create-post-page/create-post-page.component';
import { AuthGuard } from 'src/app/core/auth/auth.guard';

const routes: Routes = [
  {
    path: 'posts/create-post',
    title: 'Create Post | Mullegro',
    component: CreatePostPageComponent,
    canActivate: [AuthGuard]
  },
  { path: 'post/:id', component: PostPageComponent },
  { path: 'posts', title: 'Mullegro - Posts', component: PostListPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    PostPageModule,
    PostListPageModule,
    CreatePostPageModule
  ],
  exports: [RouterModule]
})
export class PostPagesRoutingModule {}
