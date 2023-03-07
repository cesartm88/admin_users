import {Component, ViewChild, ChangeDetectorRef, OnInit} from '@angular/core';
import { AdDirective     } from '../../directives/add/add.directive';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {State} from '../../interfaces/state.obj';
import {Router} from '@angular/router';
import {RequestService} from '../../services/request/request.service';
import {UserInfo} from '../../models/UserInfo';
import {deleteInfo, updateInfo} from '../../actions/userInfo.actions';
import * as fromStore from '../../constants/ReduxConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'users';
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;
  // some fields to store our state so we can display it in the UI
  idleState = 'NOT_STARTED';
  countdown?: number = null;
  lastPing?: Date = null;


  constructor(private store: Store<State>, private router: Router, private requestService: RequestService, private idle: Idle, keepalive: Keepalive, cd: ChangeDetectorRef) {
    // set idle parameters
    idle.setIdle(300); // how long can they be inactive before considered idle, in seconds
    idle.setTimeout(30); // how long can they be idle before considered timed out, in seconds
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES); // provide sources that will "interrupt" aka provide events indicating the user is active

    // do something when the user becomes idle
    idle.onIdleStart.subscribe(() => {
      this.idleState = 'IDLE';
    });
    // do something when the user is no longer idle
    idle.onIdleEnd.subscribe(() => {
      this.idleState = 'NOT_IDLE';
      console.log(`${this.idleState} ${new Date()}`);
      this.countdown = null;
      cd.detectChanges(); // how do i avoid this kludge?
    });
    // do something when the user has timed out
    idle.onTimeout.subscribe(() =>{
      this.idleState = 'TIMED_OUT';
      this.logout();
    });
    // do something as the timeout countdown does its thing
    idle.onTimeoutWarning.subscribe(seconds => this.countdown = seconds);

    // set keepalive parameters, omit if not using keepalive
    keepalive.interval(1200); // will ping at this interval while not idle, in seconds
    keepalive.onPing.subscribe(() => {
      this.lastPing = new Date();
      this.refreshLogin();
    }); // do something when it pings
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

  logout(){
    const userLoggedInfo: UserInfo = this.getInfoUser();
    const userLogut: Observable<any> = this.requestService.logout({token: userLoggedInfo.token});
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


  reset() {
    // we'll call this method when we want to start/reset the idle process
    // reset any component state and be sure to call idle.watch()
    this.idle.watch();
    this.idleState = 'NOT_IDLE';
    this.countdown = null;
    this.lastPing = null;
  }

  ngOnInit(): void {
    // right when the component initializes, start reset state and start watching
    this.reset();
  }


}
