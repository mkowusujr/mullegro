import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractFormService<T> {
  public form: FormGroup;

  constructor(protected fb: FormBuilder) {
    this.form = this.buildForm();
  }

  abstract buildForm(): FormGroup<any>;

  getFormValue(): T {
    return this.form.value;
  }

  get valid(): boolean {
    if (this.form.untouched) return false;
    return this.form.valid;
  }

  abstract submitForm(): void;
}
