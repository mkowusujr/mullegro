import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { IAddress } from 'src/app/core/interfaces/address';
import { AbstractFormService } from 'src/app/core/services/abstract-form.service';

@Injectable({
  providedIn: 'root'
})
export class AddressFormService extends AbstractFormService<IAddress> {
  buildForm(): FormGroup<any> {
    return this.fb.group({
      street: ['', [Validators.required]],
      aptNumber: ['', []],
      city: ['', [Validators.required]],
      state: [null, [Validators.required]],
      country: [null, []],
      zipCode: [null, [Validators.required]]
    });
  }

  getAddress(){}

  submitForm() {}
}
