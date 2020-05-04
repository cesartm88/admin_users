import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


let  headers = {
  'Content-Type':  'application/json',
};

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  public url;
  
  private httpOptions;
  constructor(
    private http : HttpClient
  ) {
    this.url = {
      test: environment,
    }

    this.httpOptions = {
      headers : new HttpHeaders(headers)
    };
  }

  test( form ):Observable<any>{
    return this.http.post(`${this.url.microservices_api}/v1/Chat/upload_foto`,form,{ headers : new HttpHeaders()});
  }
}
