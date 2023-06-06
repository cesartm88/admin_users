import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';

import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';

import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { DateComponent } from './components/date/date.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';


@NgModule({
  declarations: [
    FormComponent,
    DateComponent,
    FormGeneratorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule
  ],
  exports: [
    FormComponent,
    FormGeneratorComponent
  ]
})
export class FormsOwnModule { }
