import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import {UserLoguedObj} from '../../interfaces/user.obj';


const headers = {
  'Content-Type':  'application/json',
};

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  public url;

  private httpOptions;
  constructor(
    private http: HttpClient
  ) {
    this.url = {
      backend_api: environment.backend,
    };

    this.httpOptions = {
      headers : new HttpHeaders(headers)
    };
  }

  login( form ): Observable<any>{
    return this.http.post(`${this.url.backend_api}api/login`, form, {headers : new HttpHeaders()});
  }

  refresh( form ): Observable<any>{
    return this.http.post(`${this.url.backend_api}api/refresh`, form, {headers : new HttpHeaders()});
  }

  logout( form ): Observable<any>{
    return this.http.post(`${this.url.backend_api}api/logout`, form, {headers : new HttpHeaders()});
  }
}
