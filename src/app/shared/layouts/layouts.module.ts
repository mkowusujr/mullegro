import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ThreeColumnDisplayComponent } from './three-column-display/three-column-display.component';
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarComponent, FooterComponent, ThreeColumnDisplayComponent],
  exports: [NavbarComponent, FooterComponent, ThreeColumnDisplayComponent]
})
export class LayoutsModule {}
