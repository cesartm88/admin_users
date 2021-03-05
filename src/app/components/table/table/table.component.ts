import { Component,ViewChild, OnInit,Input } from '@angular/core';
import { DialogService } from '../../../modules/dialog/dialog.service';
import { DialogFrmComponent } from '../../../dialog/dialog-frm/dialog-frm.component';
import { LinearListComponent } from '../linear-list/linear-list.component';


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

  @ViewChild(LinearListComponent) linearList:LinearListComponent;

  options_per_page=[
    {"value":8,"name":"8 por página" },
    {"value":16,"name":"16 por página" },
    {"value":32,"name":"32 por página" }
  ];

  page_text = "Registros por página";

  options_order=[
    {"option":0,"text":"Ordenar A-Z" },
    {"option":1,"text":"Ordenar Z-A" },
  ];

  perPage = 10;

  order_text = "Orden de los registros";

  searchWord:string = "";

  

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

  changeDataPerPage = ($perpage) => {
    console.log($perpage.value);
    this.perPage = $perpage.value;
    console.log("perpage: ",this.perPage);
    this.linearList.setItemsPerPage(this.perPage);
  }

  searchListener = ($event) => {
    console.log("searching!!!",$event);
    this.searchWord = $event;
  }
}
