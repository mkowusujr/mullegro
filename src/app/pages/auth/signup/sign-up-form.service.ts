import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { AbstractFormService } from 'src/app/core/services/abstract-form.service';
import { UserService } from 'src/app/core/services/api/user.service';
import { User } from 'src/app/core/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class SignUpFormService extends AbstractFormService<User> {
  constructor(
    protected override fb: FormBuilder,
    private _userService: UserService
  ) {
    super(fb);
  }
  
  buildForm(): FormGroup<any> {
    return this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    });
  }

  submit(): Observable<any> {
    return this._userService.signup(this.getFormValue());
    // .pipe(tap(() => this.form.reset()))
  }
}
