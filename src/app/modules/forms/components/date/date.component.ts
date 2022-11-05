import {Component, Input, OnInit} from '@angular/core';
import {NGX_MAT_DATE_FORMATS} from '@angular-material-components/datetime-picker';
import {FormGroup, FormGroupDirective} from '@angular/forms';

const CUSTOM_MOMENT_FORMATS  = {
  parse: {
    dateInput: 'l'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    monthYearA11yLabel: 'MM YYYY',
  }
};

interface Form {
  key: any;
  label: string;
  value: any;
};

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [{provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_MOMENT_FORMATS}]
})
export class DateComponent implements OnInit {

  @Input() prop: Form;
  @Input() formGrp: FormGroup = {} as FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }


  ngOnInit(): void {
    this.formGrp = this.rootFormGroup.control;
  }

}
