import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  saveJwtToken(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getJwtToken(): string | null {
    return localStorage.getItem('jwt');
  }

  removeJwtToken() {
    localStorage.clear();
  }

  doesJwtExist(): boolean {
    return this.getJwtToken() != null;
  }
}
