import { Component, OnInit } from '@angular/core';
import { DialogService     } from '../../../dialog/dialog.service';
import { DialogFrmComponent } from '../../../../dialog/dialog-frm/dialog-frm.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  
  titles = {  "picture":"1","name":"1","fathersLastName":"1","mothersLastName":"1","email":"1","roleId":"1","active":"1" };

  constructor(private dialog:DialogService) { }

  ngOnInit(): void {
  }

  openDialog(){
    console.log("add!!!");
    this.dialog.open(DialogFrmComponent);
  }

}
