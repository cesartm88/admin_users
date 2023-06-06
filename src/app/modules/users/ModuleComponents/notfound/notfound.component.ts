import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  ConfigUrl = './assets/json/form-config.json';

  constructor() { }

  ngOnInit(): void {
  }

  op(form){
    console.dir(form);
  }

}
