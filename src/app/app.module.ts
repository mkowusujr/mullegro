import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth/auth.module';
import { NavbarComponent } from './shared/layouts/navbar/navbar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AppendJWT } from './core/interceptors/appendJWT.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppendJWT,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
