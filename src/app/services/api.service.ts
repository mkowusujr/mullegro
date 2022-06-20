import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:4000';

  constructor(private _http: HttpClient) { }

  getRequest(url: string): Observable<any> {
    return this._http.get(`${this.baseUrl}${url}`)
    .pipe(map(res => {
      return res
    }));
  }

  postRequest(url: string, body: {}): Observable<any> {
    return this._http.post(`${this.baseUrl}${url}`, body)
    .pipe(map(res => {
      return res
    }));
  }

  putRequest(url: string, body: {}): Observable<any> {
    return this._http.put(`${this.baseUrl}${url}`, body)
    .pipe(map(res => {
      return res
    }));
  }

  deleteRequest(url: string): Observable<any> {
    return this._http.delete(`${this.baseUrl}${url}`)
    .pipe(map(res => {
      return res
    }));
  }
}
