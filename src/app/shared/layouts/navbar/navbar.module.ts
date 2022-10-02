import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { NavUserUtilsMenuComponent } from './nav-user-utils-menu/nav-user-utils-menu.component';



@NgModule({
  declarations: [NavbarComponent, NavUserUtilsMenuComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
