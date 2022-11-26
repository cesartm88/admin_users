import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { errors } from '../../../constants/errors';
import {FormObj} from '../../../interfaces/form.obj';
import {Observable, Subscription} from 'rxjs';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  forms = [];
  @Input() formJson: any;
  @Input() debug = false;
  @Input() events: Observable<void>;
  @Output() output: EventEmitter<FormObj> = new EventEmitter();
  fg: FormGroup;
  public minDate: moment.Moment;
  public maxDate: moment.Moment;
  private eventsSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
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
    console.log("form");
    this.getValues(this.formJson);
    const form: FormObj = {
      id: new Date().getUTCMilliseconds().toString(),
      formGroup: this.fg,
      metaData: objectProps,
      transactionalData: [],
      form: this.formJson
    };
    console.dir(this.fg.status);
    this.fg.valueChanges.subscribe(values => form.form = this.getValues(this.formJson));
    this.forms.push(form);

    this.eventsSubscription = this.events.subscribe(() => this.output.emit(form));
    return form;
  }

  private getValues(form: any){
    (Object.keys(form)).forEach((key, indx) => {
      console.log(key);
      console.dir(form[key]?.label, form[key]?.value);
      console.dir(indx);
    });
    Object.entries(this.fg.controls).forEach(e => form[e[0]].value = (form[e[0]].value) ? e[1].value : form[e[0]].value);
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

  public pruebas($event){
    console.dir($event);
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

  public showError(error){
    /**
     * Object.entries(error).forEach(e => console.dir(Object.entries(error)));
     */
    return Object.entries(error).map(e => (e.length > 0) ? errors[e[0]] : '');
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
