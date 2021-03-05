import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() placeholder:string;
  @Input() options:Array<{option:any,text:string}>=[];
  @Output() selectValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  changeValue = ($event) => {
    this.selectValue.emit($event.value);
  }

}
