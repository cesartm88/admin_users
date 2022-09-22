import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'admin-theme',
  templateUrl: './admin-theme.component.html',
  styleUrls: ['./admin-theme.component.scss']
})
export class AdminThemeComponent implements OnInit {

  routeActive:string = "";

  Options_user:Array<any>=[
    {"name":"Test1","value":"Test1"},
    {"name":"Tes2","value":"Test2"}
  ];

  constructor(private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.data['element']);
    this.routeActive = this.route.snapshot.data['element'];
  }

  selectedValue($event){
    console.warn("$event:",$event);
  }

}
