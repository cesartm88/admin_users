import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormGroup } from '@angular/forms';
import {DialogService} from '../../../modules/dialog/dialog.service';
import {FormComponent} from '../../../modules/forms/form/form.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-custom',
  templateUrl: './dialog-custom.component.html',
  styleUrls: ['./dialog-custom.component.scss']
})
export class DialogCustomComponent implements OnInit {

  json: any = {};

  @ViewChild(FormComponent) form: FormComponent;

  constructor(
        private dialogService: DialogService,
        @Inject(MAT_DIALOG_DATA) public data
  ){}

  ngOnInit(): void {
    this.json = this.data.data;
  }

  close(){
    this.dialogService.close();
  }

  components(fg: FormGroup) {
    const gender = 'gender';
    const age = 'age';

    if (fg.controls[gender].value === 'F' && fg.controls[age].value !== '--') {
      fg.controls[age].setValue('--');
      fg.controls[age].disable();
    } else if (fg.controls[gender].value === 'M' && !fg.controls[age].enabled) {
      fg.controls[age].enable();
      fg.controls[age].setValue('');
    }
  }

  update($event) {
    this.json = JSON.parse($event.target.value);
  }

  get rapidPageValue() {
    return JSON.stringify(this.json, null, 2);
  }

  set rapidPageValue(v) {
    try{
      this.json = JSON.parse(v);
    }catch (e) {
      console.log('error occored while you were typing the JSON');
    };
  }

}
