import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-base-image',
  templateUrl: './base-image.component.html',
  styleUrls: ['./base-image.component.scss']
})
export class BaseImageComponent implements OnInit {

  @Input() url = '';

  constructor() { }

  ngOnInit(): void {
  }

}
