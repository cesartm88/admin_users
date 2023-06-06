import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { FormGeneratorService } from '../service/form-generator.service';
import { Form } from '../interface/form';
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  formGroup: Promise<Form>| null = null;
  @Input() configUrl;
  showhide = [];
  @Output() emitter: EventEmitter<any> = new EventEmitter();

  constructor(private formGeneratorService: FormGeneratorService) { }

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm(): void {
    this.formGroup = this.formGeneratorService.generateForm(this.configUrl);
    this.formGroup.then(form => {
      for (const i in form.fields){
         const field = form.fields[i];
         this.startFn(form.frm, field);
      }
    });
  }

  showLog(component: any){
    console.dir(component);
  }

  showHide(field){
    if (this.showhide[field]){
      return true;
    }else{
      return false;
    }
  }

  startFn(formGroup: any, field: any){
    if (field.customValidators.length > 0) {
      this.showhide[field.name] = true;
      formGroup.controls[field.name].valueChanges.subscribe((option) => {
        for (let i = 0; i < field.customValidators.length; i++) {
          const validator = field.customValidators[i];
          this.showhide[validator.name] = false;
          const requiredVal = (field.required) ? Validators.required: null;
          const fn = validator.fn;
          if (fn === 'show-hide') {
            if (option === validator.option) {
              this.showhide[validator.name] = false;
              formGroup.controls[validator.name].clearValidators();
              formGroup.controls[validator.name].updateValueAndValidity();
            } else {
              this.showhide[validator.name] = true;
              formGroup.controls[validator.name].setValidators([requiredVal]);
              formGroup.controls[validator.name].updateValueAndValidity();
            }
          }else{
            this.showhide[validator.name] = true;
            formGroup.controls[validator.name].setValidators([requiredVal]);
            formGroup.controls[validator.name].updateValueAndValidity();
          }
        }
      });
    }else {
      this.showhide[field.name] = true;
    }
  }

  getControlType(field: string): string {
    switch (field) {
      case 'text':
        return 'input';
      case 'number':
        return 'number';
      case 'email':
        return 'email';
      case 'select':
        return 'select';
      default:
        return 'input';
    }
  }

  submitForm(frm: any): void {
    if(frm.frm.valid){
      this.emitter.emit(frm);
    }
  }
}
