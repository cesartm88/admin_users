import {Component, ViewChild, ChangeDetectorRef, OnInit} from '@angular/core';
import { AdDirective     } from '../../directives/add/add.directive';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import {Store} from '@ngrx/store';
import {State} from '../../interfaces/state.obj';
import {Router} from '@angular/router';
import {RequestService} from '../../services/request/request.service';
import {UserInfo} from '../../models/UserInfo';
import {QueriesServiceService} from '../../services/queries-service.service';

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
  userLoggedInfo: UserInfo;

  constructor(
    private store: Store<State>,
    private router: Router,
    private requestService: RequestService,
    private idle: Idle,
    private keepalive: Keepalive,
    private cd: ChangeDetectorRef,
    private queriesServiceService: QueriesServiceService
  ) {
    // set idle parameters
    idle.setIdle(300); // how long can they be inactive before considered idle, in seconds
    idle.setTimeout(30); // how long can they be idle before considered timed out, in seconds
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES); // provide sources that will "interrupt" aka provide events indicating the user is active

    this.userLoggedInfo = this.queriesServiceService.getInfoUser();
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
    idle.onTimeout.subscribe(() => {
      this.idleState = 'TIMED_OUT';
      this.queriesServiceService.logout(this.userLoggedInfo);
    });
    // do something as the timeout countdown does its thing
    idle.onTimeoutWarning.subscribe(seconds => this.countdown = seconds);

    // set keepalive parameters, omit if not using keepalive
    keepalive.interval(1200); // will ping at this interval while not idle, in seconds
    keepalive.onPing.subscribe(() => {
      this.lastPing = new Date();
      this.queriesServiceService.refreshLogin();
    }); // do something when it pings
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
