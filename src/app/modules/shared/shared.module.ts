import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TableComponent,
  LinearListComponent,
  InputSearchComponent,
  CardListComponent,
  CardComponent,
  SelectComponent,
  SelectCustomComponent
} from '../../components/index';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DialogModule } from '../dialog/dialog.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


//material angular
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import {MatInputModule} from '@angular/material/input';

//directives
import { AdDirective } from '../../directives/add/add.directive';

//pipes
import { KeysPipe } from '../../pipes/key.pipe';
import { SearchPipe } from '../../pipes/search/search.pipe';
import { IsurlPipe } from '../../pipes/isUrl/isurl.pipe';

//service

@NgModule({
  declarations: [
    //componets
    TableComponent,
    LinearListComponent,
    InputSearchComponent,
    CardListComponent,
    CardComponent,
    SelectComponent,
    SelectCustomComponent,


    //directive
    AdDirective,

    //pipes
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
    MatInputModule
  ],
  exports: [
    //modules
    AngularSvgIconModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,

    //components
    TableComponent,
    LinearListComponent,
    InputSearchComponent,
    CardListComponent,
    CardComponent,
    SelectCustomComponent,

    //directives
    AdDirective,

    //pipes
    KeysPipe,
    SearchPipe,
    IsurlPipe
  ],
  providers: []
})
export class SharedModule { }
