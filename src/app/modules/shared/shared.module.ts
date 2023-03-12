import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TableComponent,
  LinearListComponent,
  InputSearchComponent,
  CardListComponent,
  CardComponent,
  SelectComponent,
  SelectCustomComponent,
  DialogCustomComponent,
  DialogDeleteComponent,
  DialogCreateComponent
} from '../../components/index';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DialogModule } from '../dialog/dialog.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogFrmComponent } from '../../dialog/dialog-frm/dialog-frm.component';
import { FormsOwnModule } from '../forms/formsown.module';
import { NotfoundComponent } from '../../modules/users/ModuleComponents/notfound/notfound.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import {
  NgxMatMomentModule,
} from '@angular-material-components/moment-adapter';

/*material angular*/
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressBarModule} from '@angular/material/progress-bar';

/*directives*/
import { AdDirective } from '../../directives/add/add.directive';

/*pipes*/
import { KeysPipe } from '../../pipes/key.pipe';
import { SearchPipe } from '../../pipes/search/search.pipe';
import { IsurlPipe } from '../../pipes/isUrl/isurl.pipe';

/*service*/

@NgModule({
  declarations: [
    /*componets*/
    TableComponent,
    LinearListComponent,
    InputSearchComponent,
    CardListComponent,
    CardComponent,
    SelectComponent,
    SelectCustomComponent,
    DialogCustomComponent,
    DialogFrmComponent,
    NotfoundComponent,
    DialogDeleteComponent,
    DialogCreateComponent,

    /*directive*/
    AdDirective,

    /*pipes*/
    KeysPipe,
    SearchPipe,
    IsurlPipe
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    DialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    FormsOwnModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule,
    MatRadioModule,
    MatProgressBarModule
  ],
  exports: [
    /*modules*/
    AngularSvgIconModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsOwnModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule,
    MatRadioModule,
    MatProgressBarModule,

    /*components*/
    TableComponent,
    LinearListComponent,
    InputSearchComponent,
    CardListComponent,
    CardComponent,
    SelectCustomComponent,
    DialogCustomComponent,
    DialogFrmComponent,
    NotfoundComponent,
    DialogDeleteComponent,
    DialogCreateComponent,

    /*directives*/
    AdDirective,

    /*pipes*/
    KeysPipe,
    SearchPipe,
    IsurlPipe
  ],
  providers: [
  ]
})
export class SharedModule { }
