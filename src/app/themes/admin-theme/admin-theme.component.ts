import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuObj} from '../../interfaces/menu.obj';
import {MENU_CONFIG} from '../../constants/Menu';
import {Store} from '@ngrx/store';
import {State} from '../../interfaces/state.obj';
import {UserInfo} from '../../models/UserInfo';
import * as fromStore from '../../constants/ReduxConstants';
import {Observable} from 'rxjs';
import {deleteInfo} from '../../actions/userInfo.actions';
import {RequestService} from '../../services/request/request.service';

@Component({
  selector: 'admin-theme',
  templateUrl: './admin-theme.component.html',
  styleUrls: ['./admin-theme.component.scss']
})
export class AdminThemeComponent implements OnInit {
  menuOptions: Array<MenuObj> = MENU_CONFIG;
  @Input() routeActive = '';
  @Input() showSideMenu = true;
  @Input() showTopMenu = true;
  userInfoLogged: UserInfo;
  title = '';
  userSessionLogout = {name: 'Cerrar Sesión', value: 'Logout'};

  OptionsUser: Array<any> = [
    this.userSessionLogout,
  ];

  constructor(private store: Store<State>, private route: ActivatedRoute, private router: Router, private requestService: RequestService) {
  }

  ngOnInit(): void {
    const keyElement = 'element';
    this.routeActive = this.route.snapshot.data[keyElement];
    this.getInfoUser();
    this.title = this.userInfoLogged.name;
  }

  getInfoUser(){
    this.store.select(fromStore.selectUserInfo).subscribe(
      userInfo => {
        this.userInfoLogged = userInfo;
      }
    );
  }

  selectedValue($event){
    console.log($event.value);
    if ($event.value === this.userSessionLogout.value){
      this.logout();
    }
  }

  logout(){
    const userLogut: Observable<any> = this.requestService.logout({token: this.userInfoLogged.token});
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

}
