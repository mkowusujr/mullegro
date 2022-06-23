import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserDetails(): string | null {
    if(localStorage.getItem('userData'))
      return localStorage.getItem('userData');
    else
      return null;
  }

  setDataInLocalStorage(varName: string, data: string) {
    localStorage.setItem(varName, data);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  clearStorage() {
    localStorage.clear();
  }
}
