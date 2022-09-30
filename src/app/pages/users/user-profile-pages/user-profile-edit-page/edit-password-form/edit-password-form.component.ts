import { Component, OnInit } from '@angular/core';
import { EditPasswordFormService } from './edit-password-form.service';

@Component({
  selector: 'edit-password-form',
  providers: [EditPasswordFormService],
  template: `
    <h3>Update Password</h3>
    <form [formGroup]="_editPasswordFormService.form" (ngSubmit)="onSubmit()">
      <label for="#currentPassword">Confirm your current password</label>
      <input type="password" formControlName="currentPassword" #currentPassword />

      <label for="#newPassword">Enter new password</label>
      <input type="password" formControlName="newPassword" #newPassword />

      <label for="#confirmNewPassword">Enter new password</label>
      <input type="password" formControlName="confirmNewPassword" #confirmNewPassword />

      <input
        type="submit"
        value="Update Password"
        [disabled]="_editPasswordFormService.form.pristine"
      />
    </form>
  `
})
export class EditPasswordFormComponent implements OnInit {
  constructor(public _editPasswordFormService: EditPasswordFormService) {}

  ngOnInit(): void {}

  onSubmit() {
    this._editPasswordFormService.submitForm();
  }
}
