import { Component, OnInit } from '@angular/core';
import { EditAddressFormService } from './edit-address-form.service';

@Component({
  selector: 'edit-address-form',
  providers: [EditAddressFormService],
  template: `
    <form [formGroup]="_editAddressFormService.form" (ngSubmit)="onSubmit()">
      <label for="#address">Address</label>
      <input type="text" formControlName="address" #address />

      <input
        type="submit"
        value="Update Address"
        [disabled]="_editAddressFormService.form.pristine"
      />
    </form>
  `
})
export class EditAddressFormComponent implements OnInit {
  constructor(public _editAddressFormService: EditAddressFormService) {}

  ngOnInit(): void {}

  onSubmit() {
    this._editAddressFormService.submitForm();
  }
}
