import {Component, ViewChild, OnInit, Input, Output, EventEmitter, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import { DialogService } from '../../../modules/dialog/dialog.service';
import { DialogFrmComponent } from '../../../dialog/dialog-frm/dialog-frm.component';
import { LinearListComponent } from '../linear-list/linear-list.component';
import {FormObj} from '../../../interfaces/form.obj';
import {TableObj} from '../../../interfaces/table.obj';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T>  implements OnInit, OnChanges{
  /**
   * @param View : string
   * values: 'list | card'
   * @description : Changes View of table between list and card
   * Default : list
   */
  view = 'list';

  @Input() items$: Observable<T> [] = [];
  @Input() formConfig = {};
  @Input() config: TableObj;
  @Output() formResult: EventEmitter<FormObj> = new EventEmitter();
  List: any[] = [];

  @ViewChild(LinearListComponent) linearList: LinearListComponent<T[]>;

  optionsPerPage = [
    { value: 8, name: '8 por página' },
    { value: 16, name: '16 por página' },
    { value: 32, name: '32 por página' }
  ];

  pageText = 'Registros por página';

  optionsOrder = [
    {option: 0, text: 'Ordenar A-Z' },
    {option: 1, text: 'Ordenar Z-A' },
  ];

  perPage = 10;

  orderText = 'Orden de los registros';

  searchWord = '';



  /**
   * @param showToFields Object with titles of columns in table.
   */
  @Input() showToFields;

  /**
   * @param orderFieldsConfig Object containing field order settings
   */
  @Input() orderFieldsConfig: string[] = [];

  constructor(private dialogService: DialogService) {
  }

  /**
   *
   * @param view string type of view selected
   */
  changeView(view){
    this.view = view;
  }

  ngOnInit(): void {
    this.List = this.items$;
  }

  ngOnChanges(changes: SimpleChanges){
    if (changes.item$){
      this.items$ = changes.item$.currentValue;
    }
  }

  openDialog(){
    const dialogRef = this.dialogService.open(DialogFrmComponent);
  }

  changeDataPerPage = (perPage) => {
    this.perPage = perPage.value;
    this.linearList.setItemsPerPage(this.perPage);
  }

  opennewDialog(){
    this.linearList.openNewDialog();
  }

  searchListener = ($event) => {
    this.searchWord = $event;
  }

  getForm($event){
    this.formResult.emit($event);
  }
}
