import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {DialogsObj} from '../../../../interfaces/dialogs.obj';
import {FormComponent} from '../../../forms/form/form.component';
import {DialogService} from '../../../dialog/dialog.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CONSTATES} from '../../../../constants/Constants';
import {FormObj} from '../../../../interfaces/form.obj';
import {login} from '../../../../constants/form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  eventsSubject: Subject<void> = new Subject<void>();
  json: any = {};
  formResult: object;
  content: DialogsObj = {
    title: '',
    content: ''
  };

  @ViewChild(FormComponent) form: FormComponent;

  constructor(){}

  ngOnInit(): void {
    this.json = login;
  }

  components(fg: FormObj) {
    this.formResult = fg;
  }

  update($event) {
    this.json = JSON.parse($event.target.value);
  }

  aceptar(){
    this.eventsSubject.next();
  }

}
