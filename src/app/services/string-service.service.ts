import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringServiceService {

  private randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  constructor() { }

  public randomString(length) {
    let result = '';
    for ( let i = 0; i < length; i++ ) {
      result += this.randomChars.charAt(Math.floor(Math.random() * this.randomChars.length));
    }
    return result;
  }
}
