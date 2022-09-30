import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileEditPageComponent } from './user-profile-edit-page.component';
import { EditBioFormComponent } from './edit-bio-form/edit-bio-form.component';
import { EditAddressFormComponent } from './edit-address-form/edit-address-form.component';
import { EditEmailFormComponent } from './edit-email-form/edit-email-form.component';
import { EditPasswordFormComponent } from './edit-password-form/edit-password-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserProfileEditPageComponent,
    EditBioFormComponent,
    EditAddressFormComponent,
    EditEmailFormComponent,
    EditPasswordFormComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class UserProfileEditPageModule {}
