import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import {UserInfo} from '../../models/UserInfo';
import * as fromStore from '../../constants/ReduxConstants';
import {Store} from '@ngrx/store';
import {State} from '../../interfaces/state.obj';


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
    private http: HttpClient,
    private store: Store<State>,
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

  getModule(module): Observable<any>{
    const infoUser = this.getInfoUser();
    return this.http.get(
      `${this.url.backend_api}api/modules/${module}`,
      {
        headers : new HttpHeaders({
        Authorization: `Bearer ${infoUser.token}`,
      })}
    );
  }

  setModule(json): Observable<any>{
    const infoUser = this.getInfoUser();
    console.dir(json);
    return this.http.post(
      `${this.url.backend_api}api/create`,
      json,
      {
        headers : new HttpHeaders({
          Authorization: `Bearer ${infoUser.token}`,
        })}
    );
  }

  getInfoUser(): UserInfo {
    let userInfoLogged: UserInfo;
    this.store.select(fromStore.selectUserInfo).subscribe(
      userInfo => {
        userInfoLogged = userInfo;
      }
    );
    return userInfoLogged;
  }
}
