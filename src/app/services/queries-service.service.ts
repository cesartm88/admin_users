import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../interfaces/state.obj';
import {Router} from '@angular/router';
import {RequestService} from './request/request.service';
import {Observable} from 'rxjs';
import {UserInfo} from '../models/UserInfo';
import {deleteInfo, updateInfo} from '../actions/userInfo.actions';
import * as fromStore from '../constants/ReduxConstants';
import {SystemConfig} from '../models/SystemConfig';
import {systemConfig} from '../constants/ReduxConstants';

@Injectable({
  providedIn: 'root'
})
export class QueriesServiceService {

  constructor(private store: Store<State>, private router: Router, private requestService: RequestService) { }

  logout(userInfoLogged: UserInfo){
    const userLogut: Observable<any> = this.requestService.logout({token: userInfoLogged.token});
    const these = this;
    userLogut.subscribe({
      next(result){
        const usr: UserInfo = {
          name: '',
          email: '',
          token: ''
        };
        these.store.dispatch(deleteInfo({userInfo: null}));
      },
      error(error){
        console.error(error);
      },
      complete(){
        console.log('updated!!');
        these.router.navigate(['/users/login']);
      }
    });
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

  getSystemConfig(): SystemConfig {
    let systemConfiguration: SystemConfig;
    this.store.select(fromStore.systemConfig).subscribe(
      config => {
        systemConfiguration = config;
      }
    );
    return systemConfiguration;
  }

  refreshLogin(){
    const loggedUser: Observable<any> = this.requestService.refresh({});
    const these = this;
    loggedUser.subscribe({
      next(result){
        this.userLogged = result;
        const usr: UserInfo = {
          name: this.userLogged.user.name,
          email: this.userLogged.user.email,
          token: this.userLogged.authorisation.token
        };
        console.log(usr);
        these.store.dispatch(updateInfo({userInfo: usr}));
      },
      error(error){
        console.error(error);
      },
      complete(){
        console.log('updated!!');
      }
    });
  }
}
