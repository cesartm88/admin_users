import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TableComponent,
  LinearListComponent,
  InputSearchComponent,
  CardListComponent,
  CardComponent,
} from '../../components/index';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DialogModule } from '../dialog/dialog.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//directives
import { AdDirective } from '../../directives/add/add.directive';

//pipes
import { KeysPipe } from '../../pipes/key.pipe';

//service

@NgModule({
  declarations: [
    //componets
    TableComponent,
    LinearListComponent,
    InputSearchComponent,
    CardListComponent,
    CardComponent,

    //directive
    AdDirective,

    //pipes
    KeysPipe
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    //modules
    AngularSvgIconModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,

    //components
    TableComponent,
    LinearListComponent,
    InputSearchComponent,
    CardListComponent,
    CardComponent,

    //directives
    AdDirective,

    //pipes
    KeysPipe
  ],
  providers: []
})
export class SharedModule { }
