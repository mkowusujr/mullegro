import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:3000/api/';

  constructor(private _http: HttpClient) {
  }

  getTypeRequest(url: string) {
    return this._http.get(`${this.baseUrl}${url}`)
    .pipe(map(res => {
      return res;
    }));
  }

  postTypeRequest(url: string, body: {}) {
    return this._http.post(`${this.baseUrl}${url}`, body)
    .pipe(map(res => {
      return res;
    }));
  }

  putTypeRequest(url: string, body: {}) {
    return this._http.put(`${this.baseUrl}${url}`, body)
    .pipe(map(res => {
      return res;
    }));
  }
}