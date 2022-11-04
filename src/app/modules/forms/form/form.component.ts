import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup, AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export const CUSTOM_MOMENT_FORMATS  = {
  parse: {
    dateInput: "l, LT"
  },
  display: {
    dateInput: "l, LT",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  forms = [];
  @Input() formJson: any;
  @Input() debug = false;
  @Output() output: EventEmitter<FormGroup> = new EventEmitter();
  fg: FormGroup;
  public minDate: moment.Moment;
  public maxDate: moment.Moment;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    if (this.formJson == null) { return 0; }
    const dataObject = this.formJson;
    const objectProps = Object.keys(dataObject).map(prop => {
      return Object.assign({}, { key: prop }, dataObject[prop]);
    });
    const formGroup = {};
    for (const prop of Object.keys(dataObject)) {
      formGroup[prop] = new FormControl(dataObject[prop].value || '', this.mapValidators(dataObject[prop].validation));
    }

    this.fg = new FormGroup(formGroup);
    const form = {
      id: new Date().getUTCMilliseconds().toString(),
      formGroup: this.fg,
      metaData: objectProps,
      transactionalData: [],
    };
    this.fg.valueChanges.subscribe(values => {
      this.output.emit(this.fg);
    });
    this.forms.push(form);
    return form;
  }

  private mapValidators(validators) {
    const formValidators = [];

    if (validators) {
      for (const validation of Object.keys(validators)) {
        switch (validation){
          case 'required':
            formValidators.push(Validators.required);
            break;
          case 'minLength':
            formValidators.push(Validators.minLength(validators[validation]));
            break;
          case 'maxLength':
            formValidators.push(Validators.maxLength(validators[validation]));
            break;
          case 'numbers':
            formValidators.push(Validators.pattern('^[0-9]*$'));
            break;
          case 'email':
            formValidators.push(Validators.email);
            break;
        }
      }
    }

    return formValidators;
  }

  public hasValidator(controlName: string, validator: string): boolean {
    const control: AbstractControl = this.fg.controls[controlName];
    switch (validator) {
      case 'required':
        control.setValue('');  // as is appropriate for the control
        break;
      case 'pattern':
        control.setValue('3'); // given you have knowledge of what the pattern is - say its '\d\d\d'
        break;
    }
    if (control.validator != null && control.validator(control) != null) {
      const hasValidator: boolean = !!control.validator(control).hasOwnProperty(validator);
      return hasValidator;
    }
    return false;
  }

  // updateForm(id: string, transactionalData: any) {
  //   debugger;
  //   this.store.dispatch(new actions.Update(id, { transactionalData: transactionalData }));
  // }

  // deleteForm(id: string) {
  //   this.store.dispatch(new actions.Delete(id));
  // }

  onSubmit(form: any) {

  }

}
