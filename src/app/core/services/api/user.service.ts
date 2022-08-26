import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = '/users'

  constructor(private _api: ApiService) { }

  // register
  // login
  // get all
  // get one
  // remove acct
  // search
}
