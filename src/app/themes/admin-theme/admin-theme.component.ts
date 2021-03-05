import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-theme',
  templateUrl: './admin-theme.component.html',
  styleUrls: ['./admin-theme.component.scss']
})
export class AdminThemeComponent implements OnInit {

  Options_user:Array<any>=[
    {"name":"Test1","value":"Test1"},
    {"name":"Tes2","value":"Test2"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectedValue($event){
    console.warn("$event:",$event);
  }

}
