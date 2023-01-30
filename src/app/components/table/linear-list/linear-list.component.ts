import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { GenericList } from '../../../class/GenericList';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DialogService } from '../../../modules/dialog/dialog.service';
import { DialogCustomComponent } from '../dialog-custom/dialog-custom.component';
import {FormObj} from '../../../interfaces/form.obj';
import {DialogDeleteComponent} from '../dialog-delete/dialog-delete.component';
import {CONSTATES} from '../../../constants/Constants';
import {TableObj} from '../../../interfaces/table.obj';
import {ActionObj} from '../../../interfaces/action.obj';
import * as moment from 'moment';
import {DialogCreateComponent} from '../dialog-create/dialog-create.component';

@Component({
  selector: 'app-linear-list',
  templateUrl: './linear-list.component.html',
  styleUrls: ['./linear-list.component.scss']
})

export class LinearListComponent<T> implements OnInit, OnChanges {
  listItems = null;
  List: Observable<T[]> = null;
  Pages: Observable<Array<number>> = of([]);
  LastPage = 0;
  FocusPage = 1;
  CurrentOrder = 0;
  @Input() perPage = 10;
  @Input() showToFields;
  @Input() search;
  @Input() items$: any[] = [];
  @Input() jsonForm: any = {};
  @Input() config: TableObj;
  @Output() getForm: EventEmitter<ActionObj> = new EventEmitter();
  list = [];

  constructor(private dialog: DialogService) {

  }

  ngOnInit(): void {
    this.runList();
  }

  runList(){
    this.listItems = new GenericList(this.config.ID);
    this.listItems.setData(this.items$);
    this.List = of(this.listItems.setDataPerPage(this.perPage, this.FocusPage));
    this.LastPage = this.listItems.getTotalPages();
    this.Pages = of(this.getList(1, this.LastPage));
    for (let index = 1; index <= this.LastPage; index++) {
      if (this.Pages){
        this.Pages.pipe(map(usersList => {
          this.list.push(index);
          return usersList;
        }));
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes){
      this.items$ = changes.items$.currentValue;
      this.runList();
    }
  }

  initList(data: any){
    this.listItems = new GenericList<any>();
    this.listItems.setData(data);
  }

  setItemsPerPage = (numberItems) => {
    this.List = of(this.listItems.setDataPerPage(numberItems, this.FocusPage));
    this.Pages = of(this.getList(1, this.listItems.getTotalPages(numberItems)));
  }

  setPage = (page) => {
    this.FocusPage = page;
    this.List = of(this.listItems.paginate(this.FocusPage));
  }

  getList(first: number, last: number){
    const lisTmp = [];
    for (let i = first; i <= last; i ++){
      lisTmp.push(i);
    }
    return lisTmp;
  }

  nextPage = () => {
    this.FocusPage = (this.FocusPage < this.LastPage) ? this.FocusPage + 1 : this.FocusPage;
    this.List = of(this.listItems.paginate(this.FocusPage));
  }

  beforePage = () => {
    this.FocusPage = (this.FocusPage > 1) ? this.FocusPage - 1 : this.FocusPage;
    this.List = of(this.listItems.paginate(this.FocusPage));
  }

  orderElement = (title) => {
    if (this.CurrentOrder === 0){
      this.CurrentOrder = 1;
    } else {
      this.CurrentOrder = 0;
    }
    this.List = of(this.listItems.orderItems(this.CurrentOrder, title));
  }

  openDeleteDialog(){
    this.dialog.open(DialogDeleteComponent, {});
  }

  openNewDialog(){
    const dialogRef = this.dialog.open( DialogCreateComponent, {
      editData: {},
      data: this.jsonForm,
      config: this.config,
      action: CONSTATES.CONSTANTE_NUEVO
    });
    dialogRef.afterClosed().subscribe(result => {
      const data: ActionObj = {
        action: CONSTATES.CONSTANTE_NUEVO,
        data: result
      };
      this.getForm.emit(data);
    });
  }

  openDialog(args?: object, item?: object) {
    if (args[CONSTATES.keyAlias] === CONSTATES.deleteKey){
      const dialogRef = this.dialog.open( DialogDeleteComponent, {
        data: item,
        config: this.config
      });
      dialogRef.afterClosed().subscribe(result => {
        const data: ActionObj = {
          action: CONSTATES.CONSTANTE_DELETE,
          data: result
        };
        this.getForm.emit(data);
      });
    }else if (args[CONSTATES.keyAlias] === CONSTATES.editKey){
      const  mergedFrm = this.fillData(this.jsonForm, item);
      const dialogRef = this.dialog.open( DialogCustomComponent, {
        editData: item,
        data: mergedFrm,
        config: this.config,
        action: CONSTATES.CONSTANTE_EDIT
      });
      dialogRef.afterClosed().subscribe(result => {
        const data: ActionObj = {
          action: CONSTATES.CONSTANTE_EDIT,
          data: result
        };
        this.getForm.emit(data);
      });
    }
  }



  fillData(data: any, dataEdit): any{
    const valKey = 'value';
    const obj = Object.entries(data);
    obj.forEach(([key, value]) => {
      const date = moment(dataEdit[key]);
      if (date.isValid()){
        data[key][valKey] =  date;
      }else{
        data[key][valKey] =  dataEdit[key];
      }
    });
    return data;
  }

}
