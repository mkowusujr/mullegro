import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LayoutsModule } from './shared/layouts/layouts.module';

import { AppComponent } from './app.component';

import { AuthInterceptor } from './core/auth/auth.interceptor';
import { CreatePostComponent } from './shared/components/create-post/create-post.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, LayoutsModule],
  declarations: [AppComponent, CreatePostComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
