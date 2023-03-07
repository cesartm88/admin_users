import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuObj} from '../../interfaces/menu.obj';
import {MENU_CONFIG} from '../../constants/Menu';
import {Store} from '@ngrx/store';
import {State} from '../../interfaces/state.obj';

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

  OptionsUser: Array<any> = [
    {name: 'Test1', value: 'Test1'},
    {name: 'Tes2', value: 'Test2' }
  ];

  constructor(private store: Store<State>, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const keyElement = 'element';
    this.routeActive = this.route.snapshot.data[keyElement];
  }

  selectedValue($event){
  }

}
