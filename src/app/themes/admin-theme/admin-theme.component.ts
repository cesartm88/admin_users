import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'admin-theme',
  templateUrl: './admin-theme.component.html',
  styleUrls: ['./admin-theme.component.scss']
})
export class AdminThemeComponent implements OnInit {

  routeActive = '';

  OptionsUser: Array<any> = [
    {name: 'Test1', value: 'Test1'},
    {name: 'Tes2', value: 'Test2' }
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const keyElement = 'element';
    this.routeActive = this.route.snapshot.data[keyElement];
  }

  selectedValue($event){
    console.warn('$event:', $event);
  }

}
