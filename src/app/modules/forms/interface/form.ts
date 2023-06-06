import { Field } from './field';
import { FormGroup } from '@angular/forms';

export interface Form {
  frm: FormGroup;
  fields: Field[];
}
