import { Component, OnInit } from '@angular/core';
import {DialogFrmComponent} from '../../../../dialog/dialog-frm/dialog-frm.component';
import {DialogService} from '../../../dialog/dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: DialogService) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogFrmComponent);
  }

}
