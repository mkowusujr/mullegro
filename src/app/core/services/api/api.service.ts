import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:3000/api';

  constructor(private _http: HttpClient) {
  }

  getRequest(url: string): Observable<any> {
    return this._http.get(`${this.baseUrl}${url}`)
    .pipe(map(res => {
      return res;
    }));
  }

  postRequest(url: string, payload: {}): Observable<any> {
    return this._http.post(`${this.baseUrl}${url}`, payload)
    .pipe(map(res => {
      return res;
    }));
  }

  putRequest(url: string, payload: {}): Observable<any> {
    return this._http.put(`${this.baseUrl}${url}`, payload)
    .pipe(map(res => {
      return res;
    }));
  }

  deleteRequest(url: string): Observable<any> {
    return this._http.delete(`${this.baseUrl}${url}`)
    .pipe(map(res => {
      return res;
    }));
  }
}
