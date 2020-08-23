import { Component, OnInit,Input } from '@angular/core';
import { ListUsers  } from '../../../class/ListUsers';
import { Observable,of } from 'rxjs';
import {  User } from '../../../models/User';

@Component({
  selector: 'linear-list',
  templateUrl: './linear-list.component.html',
  styleUrls: ['./linear-list.component.scss']
})
export class LinearListComponent implements OnInit {
  listUsers = null;
  List:Observable<Array<User>> = null;
  Pages:Array<number> = [];
  LastPage:number = 0;
  FocusPage:number = 1;
  @Input() showToFields;

  constructor() { 
    this.listUsers = new ListUsers();
  }

  ngOnInit(): void {
    this.List =  of(this.listUsers.paginate(this.FocusPage));
   
    this.LastPage = this.listUsers.getTotalPages();
    for (let index = 1; index <= this.LastPage; index++) {
      this.Pages.push(index);
    }
  }

  setPage = (page) => {
    this.FocusPage = page;
    this.List =  of(this.listUsers.paginate(this.FocusPage));
  }

  nextPage = () => {
      this.FocusPage = (this.FocusPage < this.LastPage)?this.FocusPage + 1:this.FocusPage;
      this.List =  of(this.listUsers.paginate(this.FocusPage));
  }

  beforePage = () => {
    this.FocusPage = (this.FocusPage > 1)?this.FocusPage -1:this.FocusPage;
    this.List =  of(this.listUsers.paginate(this.FocusPage));
}

}
