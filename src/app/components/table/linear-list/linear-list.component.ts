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
  @Input() showToFields;

  constructor() { 
    this.listUsers = new ListUsers();
  }

  ngOnInit(): void {
    this.List =  of(this.listUsers.readAllItems());
    
    console.log("List!!!",this.List);
  }

}
