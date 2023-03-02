import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../interfaces/state.obj';
import * as fromStore from '../constants/ReduxConstants';
import {UserInfo} from '../models/UserInfo';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private store: Store<State>,
    private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {
    const isAuthenticated: boolean = ( this.getInfoUser().token !== "") ? true : false;
    if (!isAuthenticated) {
      this.router.navigate(['/users/login']);
    }
    return isAuthenticated;
  }

  getInfoUser(): UserInfo{
    let userInfoLogged: UserInfo;
    this.store.select(fromStore.selectUserInfo).subscribe(
      userInfo => {
        console.log(userInfo);
        userInfoLogged = userInfo;
      }
    );
    return userInfoLogged;
  }
}
