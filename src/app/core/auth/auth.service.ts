import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  saveJwtToken(value: string) {
    const key = 'jwt';
    localStorage.setItem(key, value);
  }

  getJwtToken(): string | null {
    return localStorage.getItem('jwt');
  }

  clearJwtToken() {
    localStorage.clear();
  }

  doesJwtExist(): boolean {
    return this.getJwtToken() != null;
  }
}
