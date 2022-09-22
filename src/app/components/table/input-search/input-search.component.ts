import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  @Output() searchListener = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSearchChange(searchWord){
    console.log("TEst!!");
    this.searchListener.emit(searchWord);
  }

}
