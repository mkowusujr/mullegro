import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth/auth.module';
import { NavbarComponent } from './shared/layouts/navbar/navbar.component';
import { ProfileComponent } from './pages/profile-page/profile.component';
import { AppendJWT } from './core/interceptors/appendJWT.interceptor';
import { HomeComponent } from './pages/home-page/home.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    FooterComponent,
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
