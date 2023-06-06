import { option } from './option';
import { CustomValidator } from './customValidator';

export interface Field {
   type: string;
   options: option[];
   name: string;
   label: string;
   customValidators: CustomValidator[];
   required: boolean;
}
