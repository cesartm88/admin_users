import { Component,ViewChild, OnInit,Input } from '@angular/core';
import { DialogService } from '../../../modules/dialog/dialog.service';
import { DialogFrmComponent } from '../../../dialog/dialog-frm/dialog-frm.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent  implements OnInit{
  /**
   * @param View : string 
   * values: "list | card"
   * @description : Changes View of table between list and card
   * Default : list
   */
  view:string = "list";

  /** 
   * @param showToFields Object with titles of columns in table.
   */
  @Input() showToFields;

  constructor(private dialogService: DialogService) { 
  }

  /**
   * 
   * @param view string type of view selected
   */
  changeView(view:string){
    this.view = view;
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
   
  }

  openDialog(){
    this.dialogService.open(DialogFrmComponent);
  }
}
