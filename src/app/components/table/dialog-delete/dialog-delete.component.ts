import {Component, Inject, OnInit} from '@angular/core';
import {DialogService} from '../../../modules/dialog/dialog.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogsObj} from '../../../interfaces/dialogs.obj';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent implements OnInit {

  content: DialogsObj = {
    title: '',
    content: ''
  };

  info: object = {};

  constructor(
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.info = data.data;
    const keyID = data.config.ID;
    const ID = this.info[keyID];
    const TYPE = data.config.moduleName;
    const DELETE_DATA = data.config.name;
    this.content.title = `Eliminar ${TYPE}`;
    this.content.content = `¿Deseas eliminar  ${DELETE_DATA}  ${ID}?`;
  }

  ngOnInit(): void {
  }

  close(){
    this.dialogService.close();
  }

  aceptar(){
    this.dialogService.close(this.info);
  }

}
