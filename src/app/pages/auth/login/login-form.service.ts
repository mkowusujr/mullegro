import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AbstractFormService } from 'src/app/core/services/abstract-form.service';
import { UserService } from 'src/app/core/services/api/user.service';
import { LoginForm } from './login-form';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService extends AbstractFormService<LoginForm> {
  constructor(
    protected override fb: FormBuilder,
    private _userService: UserService
  ) {
    super(fb);
  }

  buildForm(): FormGroup<any> {
    return this.fb.group({
      emailOrUsername: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit(): Observable<any> {
    return this._userService.login(this.getFormValue());
    // .pipe(tap(() => this.form.reset()))
  }
}
