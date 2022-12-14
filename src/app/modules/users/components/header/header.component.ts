import {Component, Input, OnInit} from '@angular/core';
import {DialogFrmComponent} from '../../../../dialog/dialog-frm/dialog-frm.component';
import {DialogService} from '../../../dialog/dialog.service';
import {TableObj} from '../../../../interfaces/table.obj';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() config: TableObj = {
    ID: '',
    name: '',
    moduleName: ''
  };

  constructor(private dialog: DialogService) {

  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogFrmComponent);
  }

}
