import { Component, OnInit, Input } from '@angular/core';
import { GenericList } from '../../../class/ListUsers';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DialogService } from '../../../modules/dialog/dialog.service';
import { DialogCustomComponent } from '../dialog-custom/dialog-custom.component';

@Component({
  selector: 'app-linear-list',
  templateUrl: './linear-list.component.html',
  styleUrls: ['./linear-list.component.scss']
})

export class LinearListComponent<T> implements OnInit {
  listUsers = null;
  List: Observable<Array<any>> = null;
  Pages: Observable<Array<number>> = of([]);
  LastPage = 0;
  FocusPage = 1;
  CurrentOrder = 0;
  @Input() perPage = 10;
  @Input() showToFields;
  @Input() search;
  @Input() items: Array<T> = [];
  list = [];

  constructor(private dialog: DialogService) {

  }

  ngOnInit(): void {
    this.listUsers = new GenericList();
    this.listUsers.setData(this.items);
    this.List = of(this.listUsers.setDataPerPage(this.perPage, this.FocusPage));
    this.LastPage = this.listUsers.getTotalPages();
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

  initList(data: any){
    this.listUsers = new GenericList<any>();
    this.listUsers.setData(data);
  }

  setItemsPerPage = (numberItems) => {
    this.List = of(this.listUsers.setDataPerPage(numberItems, this.FocusPage));
    this.Pages = of(this.getList(1, this.listUsers.getTotalPages(numberItems)));
  }

  setPage = (page) => {
    this.FocusPage = page;
    this.List = of(this.listUsers.paginate(this.FocusPage));
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
    this.List = of(this.listUsers.paginate(this.FocusPage));
  }

  beforePage = () => {
    this.FocusPage = (this.FocusPage > 1) ? this.FocusPage - 1 : this.FocusPage;
    this.List = of(this.listUsers.paginate(this.FocusPage));
  }

  orderElement = (title) => {
    if (this.CurrentOrder === 0){
      this.CurrentOrder = 1;
    } else {
      this.CurrentOrder = 0;
    }
    this.List = of(this.listUsers.orderItems(this.CurrentOrder, title));
  }

  openDialog() {
    this.dialog.open(DialogCustomComponent);
  }

}
