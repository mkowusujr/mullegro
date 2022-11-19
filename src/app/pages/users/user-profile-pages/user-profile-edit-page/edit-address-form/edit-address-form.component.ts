import { Component } from '@angular/core';
import { EditAddressFormService } from './edit-address-form.service';

@Component({
  selector: 'edit-address-form',
  providers: [EditAddressFormService],
  template: `
    <h3>Update Address</h3>
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
export class EditAddressFormComponent {
  constructor(public _editAddressFormService: EditAddressFormService) {}

  onSubmit() {
    this._editAddressFormService.submitForm();
  }
}
