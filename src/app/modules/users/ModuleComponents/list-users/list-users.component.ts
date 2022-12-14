import {Component, OnInit, ViewChild} from '@angular/core';
import { DialogService } from '../../../dialog/dialog.service';
import { DialogFrmComponent } from '../../../../dialog/dialog-frm/dialog-frm.component';
import { users_config } from '../../../../constants/titles_tables';
import {User} from '../../../../models/User';
import _users from '../../../../../assets/json/users';
import {TableObj} from '../../../../interfaces/table.obj';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users: Array<User> = _users;

  ID: TableObj = {
    ID: 'sync',
    moduleName: 'Usuarios',
    name: 'el usuario'
  };

  titles = users_config;

  constructor() { }

  ngOnInit(): void {
  }
}
