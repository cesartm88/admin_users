import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Field } from '../interface/field';
import { Form } from '../interface/form';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {

  constructor(private http: HttpClient) { }

     generateForm(configUrl: string): Promise<Form> {
       return this.http.get(configUrl)
         .toPromise()
         .then((config: any) => {
          const formGroup = new FormGroup({});
          const formConfig: Form = {
            frm: formGroup,
            fields: []
          };
          config.fields.forEach(( field: any) => {
             const formControl = new FormControl<any>(
               field.defaultValue || ''
             );
             formControl.setValidators(this.getValidators(field));

             formGroup.addControl(field.name, formControl);
             const fieldConfig: Field = {
                  type: field.type,
                  options: field.options || [],
                  name: field.name,
                  label: field.label,
                  required: field.required,
                  customValidators: field.customValidators || []
             };
             formConfig.fields.push(fieldConfig);
             formGroup.addControl(field.name, formControl);
          });
          config.fields.forEach(( field: any) => {
            if (field.customValidators){
              formGroup.controls[field.name].valueChanges.subscribe((option) => {
                for (let i = 0; i < field.customValidators.length; i++) {
                  const validator = field.customValidators[i];
                  const fn = validator.fn;
                  if (fn === 'disabled-enable'){
                    if (option === validator.option){
                      formGroup.controls[validator.name].disable();
                    }else{
                      formGroup.controls[validator.name].enable();
                    }
                  }
                }
              });
            }
          });
          formConfig.frm = formGroup;
          return formConfig;
         });
     }

    private getValidators(field: any): any[] {
      const validators = [];
      if (field.required) {
        validators.push(Validators.required);
      }
      if (field.minLength) {
        validators.push(Validators.minLength(field.minLength));
      }
      if (field.maxLength) {
        validators.push(Validators.maxLength(field.maxLength));
      }
      if (field.type === 'email') {
        validators.push(Validators.email);
      }
      if (field.type === 'number') {
        validators.push(Validators.pattern(/^\d+$/));
      }
      if (field.type === 'select' && field.options && field.options.length > 0) {
        validators.push(Validators.required); // Se requiere una selección
      }
      return validators;
    }

    /*private dependentFieldsValidator(dependentFields: any[]): any {
      return (formControl: FormControl) => {
        const selectedValue = formControl.value;
        const hasDependentFields = dependentFields.some((dependentField) => {
          return dependentField.required && dependentField.parentValue === selectedValue;
        });
        return hasDependentFields ? null : { dependenciesNotMet: true };
      };
    }*/
}
