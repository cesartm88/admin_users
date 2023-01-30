import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {DialogsObj} from '../../../interfaces/dialogs.obj';
import {FormComponent} from '../../../modules/forms/form/form.component';
import {DialogService} from '../../../modules/dialog/dialog.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CONSTATES} from '../../../constants/Constants';
import {FormObj} from '../../../interfaces/form.obj';

@Component({
  selector: 'app-dialog-create',
  templateUrl: './dialog-create.component.html',
  styleUrls: ['./dialog-create.component.scss']
})
export class DialogCreateComponent implements OnInit {
  eventsSubject: Subject<void> = new Subject<void>();
  json: any = {};
  formResult: object;
  content: DialogsObj = {
    title: '',
    content: ''
  };

  @ViewChild(FormComponent) form: FormComponent;

  constructor(
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) public data
  ){
    const TYPE = data.config.moduleName;
    const ACTION = (data.config.action === CONSTATES.CONSTANTE_EDIT) ? CONSTATES.editKey : CONSTATES.addKey;
    this.content.title = `${ACTION} ${TYPE}`;
  }

  ngOnInit(): void {
    this.json = this.data.data;
  }

  close(){
    this.dialogService.close();
  }

  components(fg: FormObj) {
    this.formResult = fg;
  }

  update($event) {
    this.json = JSON.parse($event.target.value);
  }

  aceptar(){
    this.eventsSubject.next();
    this.dialogService.close(this.formResult);
  }

}
