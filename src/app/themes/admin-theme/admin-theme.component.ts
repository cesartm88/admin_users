import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuObj} from '../../interfaces/menu.obj';
import {MENU_CONFIG} from '../../constants/Menu';
import {Store} from '@ngrx/store';
import {State} from '../../interfaces/state.obj';
import {UserInfo} from '../../models/UserInfo';
import {RequestService} from '../../services/request/request.service';
import {QueriesServiceService} from '../../services/queries-service.service';

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

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router,
    private requestService: RequestService,
    private queriesServiceService: QueriesServiceService
  ){
    this.userInfoLogged = this.queriesServiceService.getInfoUser();
    this.title = this.userInfoLogged.name;
  }

  ngOnInit(): void {
    const keyElement = 'element';
    this.routeActive = this.route.snapshot.data[keyElement];
  }

  selectedValue($event){
    console.log($event.value);
    if ($event.value === this.userSessionLogout.value){
      this.queriesServiceService.logout(this.userInfoLogged);
    }
  }
}
