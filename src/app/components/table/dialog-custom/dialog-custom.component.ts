import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup } from '@angular/forms';
import {User} from '../../../models/User';
import {DialogService} from '../../../modules/dialog/dialog.service';
import {FormComponent} from '../../../modules/forms/form/form.component';

@Component({
  selector: 'app-dialog-custom',
  templateUrl: './dialog-custom.component.html',
  styleUrls: ['./dialog-custom.component.scss']
})
export class DialogCustomComponent implements OnInit {

  json: any = {
    name: {
      label: 'Name',
      value: 'test',
      type: 'text',
      validation: {
        required: true,
        minLength: 5,
        maxLength: 10
      },
    },
    age: {
      label: 'Age',
      value: 32,
      type: 'number'
    },
    email: {
      label: 'Email Address',
      value: null,
      type: 'email'
    },
    profilePic: {
      label: 'Profile Picture Upload',
      type: 'file'
    },
    comment: {
      label: 'comment',
      value: null,
      type: 'text',
      validation: {
        required: true,
        minLength: 5,
        maxLength: 10
      },
    },
    gender: {
      label: 'Gender',
      value: 'M',
      type: 'radio',
      options: [
        { label: 'Male', value: 'M' },
        { label: 'Female', value: 'F' }
      ]
    },
    city: {
      label: 'City',
      value: '39010',
      type: 'select',
      options: [
        { label: '(choose one)', value: '' },
        { label: 'Bolzano', value: '39100' },
        { label: 'Meltina', value: '39010' },
        { label: 'Appiano', value: '39057' }
      ],
      validation: {
        required: true
      }
    }
  };

  @ViewChild(FormComponent) form: FormComponent;

  constructor(private dialogService: DialogService){}

  ngOnInit(): void {

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
