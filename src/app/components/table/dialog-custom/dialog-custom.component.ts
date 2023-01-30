import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {DialogService} from '../../../modules/dialog/dialog.service';
import {FormComponent} from '../../../modules/forms/form/form.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Subject} from 'rxjs';
import {FormObj} from '../../../interfaces/form.obj';
import {DialogsObj} from '../../../interfaces/dialogs.obj';
import {CONSTATES} from '../../../constants/Constants';

@Component({
  selector: 'app-dialog-custom',
  templateUrl: './dialog-custom.component.html',
  styleUrls: ['./dialog-custom.component.scss']
})
export class DialogCustomComponent implements OnInit {
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
    /*const gender = 'gender';
    const age = 'age';
    this.frm = fg.formGroup;
    if (this.frm.valid){
      if (this.frm.controls[gender].value === 'F' && this.frm.controls[age].value !== '--') {
        this.frm.controls[age].setValue('--');
        this.frm.controls[age].disable();
      } else if (this.frm.controls[gender].value === 'M' && !this.frm.controls[age].enabled) {
        this.frm.controls[age].enable();
        this.frm.controls[age].setValue('');
      }
      this.formResult = this.frm;
    }else{
    }*/
    this.formResult = fg;
  }

  update($event) {
    this.json = JSON.parse($event.target.value);
  }

  /*
  get rapidPageValue() {
    return JSON.stringify(this.json, null, 2);
  }

  set rapidPageValue(v) {
    try{
      this.json = JSON.parse(v);
    }catch (e) {
      console.log('error occored while you were typing the JSON');
    }
  }
  */

  aceptar(){
    this.eventsSubject.next();
    this.dialogService.close(this.formResult);
  }

}
