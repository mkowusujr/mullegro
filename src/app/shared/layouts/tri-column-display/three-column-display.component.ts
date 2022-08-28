import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'three-column-display',
  template: `
    <div class="tri-col-display">
      <ng-content select="[col1]"></ng-content>
      <ng-content select="[col2]"></ng-content>
      <ng-content select="[col3]"></ng-content>
    </div>
  `
})
export class ThreeColumnDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
