import { Component } from '@angular/core';

@Component({
  selector: 'three-column-display',
  template: `
    <ng-content select="[col1]"></ng-content>
    <ng-content select="[col2]"></ng-content>
    <!-- <div class="vertical-divider"></div> -->
    <ng-content select="[col3]"></ng-content>
  `
})
export class ThreeColumnDisplayComponent {}
