import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostPageModule } from './post-page/post-page.module';
import { PostPageComponent } from './post-page/post-page.component';

const routes: Routes = [{ path: 'post/:id', component: PostPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostPagesRoutingModule {}
