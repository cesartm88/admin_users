import { Component, OnInit, Input } from '@angular/core';
import { ListUsers } from '../../../class/ListUsers';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../../models/User';

@Component({
  selector: 'linear-list',
  templateUrl: './linear-list.component.html',
  styleUrls: ['./linear-list.component.scss']
})
export class LinearListComponent implements OnInit {
  listUsers = null;
  List: Observable<Array<User>> = null;
  Pages: Observable<Array<number>> = null;
  LastPage: number = 0;
  FocusPage: number = 1;
  CurrentOrder: number = 0;
  @Input() perPage = 10;
  @Input() showToFields;
  @Input() search:string;
  list = [];

  constructor() {
    this.listUsers = new ListUsers();
  }

  ngOnInit(): void {
    
    this.List = of(this.listUsers.setDataPerPage(this.perPage,this.FocusPage));

    this.LastPage = this.listUsers.getTotalPages();
    for (let index = 1; index <= this.LastPage; index++) {
      this.Pages.pipe(map(usersList => {
        this.list.push(index);
        return usersList;
      }));
    }
  }

  setItemsPerPage = (numberItems) => {
    this.List = of(this.listUsers.setDataPerPage(numberItems,this.FocusPage));
    console.log("numberItems: ",numberItems);
    this.Pages = this.listUsers.getTotalPages(numberItems);
  }

  setPage = (page) => {
    this.FocusPage = page;
    this.List = of(this.listUsers.paginate(this.FocusPage));
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
    if(this.CurrentOrder == 0){
      this.CurrentOrder = 1;
    }else{
      this.CurrentOrder = 0;
    }
    this.List = of(this.listUsers.orderItems(this.CurrentOrder,title));
  }

}
