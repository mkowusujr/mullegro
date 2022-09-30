import { Component, OnInit } from '@angular/core';
import { EditEmailFormService } from './edit-email-form.service';

@Component({
  selector: 'edit-email-form',
  providers: [EditEmailFormService],
  template: `
    <h3>Update Email Address</h3>
    <form [formGroup]="_editEmailFormService.form" (ngSubmit)="onSubmit()">
      <label for="#currentEmail">Confirm your current email address</label>
      <input type="text" formControlName="currentEmail" #currentEmail />

      <label for="#newEmail">Enter new email address</label>
      <input type="text" formControlName="newEmail" #newEmail />

      <input
        type="submit"
        value="Update Email Address"
        [disabled]="_editEmailFormService.form.pristine"
      />
    </form>
  `
})
export class EditEmailFormComponent implements OnInit {
  constructor(public _editEmailFormService: EditEmailFormService) {}

  ngOnInit(): void {}

  onSubmit() {
    this._editEmailFormService.submitForm();
  }
}
