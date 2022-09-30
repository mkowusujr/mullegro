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

      <label for="#password">Enter new password</label>
      <input type="password" formControlName="password" #password />

      <label for="#confirmPassword">Enter new password</label>
      <input type="password" formControlName="confirmPassword" #confirmPassword />

      <input
        type="submit"
        value="Update Password"
        [disabled]="!_editPasswordFormService.valid"
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
