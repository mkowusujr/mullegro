import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { NavbarComponent } from './shared/layouts/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
