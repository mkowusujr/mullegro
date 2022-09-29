import { Component, OnInit } from '@angular/core';
import { EditBioFormService } from './edit-bio-form.service';

@Component({
  selector: 'edit-bio-form',
  providers: [EditBioFormService],
  template: `
    <form [formGroup]="_editBioFormService.form" (ngSubmit)="onSubmit()">
      <label for="#bio">Bio</label>
      <textarea
        #bio
        type="text"
        formControlName="bio"
        spellcheck="true"
        wrap="hard"
      >
      </textarea>
      <input
        type="submit"
        value="Update Bio"
        [disabled]="_editBioFormService.form.pristine"
      />
    </form>
  `,
  styles: []
})
export class EditBioFormComponent implements OnInit {
  constructor(public _editBioFormService: EditBioFormService) {}

  ngOnInit(): void {}

  onSubmit() {
    this._editBioFormService.submitForm();
  }
}
