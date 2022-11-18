import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClickOutsideModule } from '@solidexpert/ng-click-outside';
import { NavbarComponent } from './navbar.component';
import { NavUserUtilsMenuComponent } from './nav-user-utils-menu/nav-user-utils-menu.component';

@NgModule({
  declarations: [NavbarComponent, NavUserUtilsMenuComponent],
  imports: [CommonModule, RouterModule, ClickOutsideModule],
  exports: [NavbarComponent]
})
export class NavbarModule {}
