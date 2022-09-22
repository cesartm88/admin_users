import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../../dialog/dialog.service';
import { DialogFrmComponent } from '../../../../dialog/dialog-frm/dialog-frm.component';
import { users_config } from '../../../../constants/titles_tables';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  titles = users_config;
  constructor() { }

  ngOnInit(): void {
  }
}
