import {Component, Input, OnInit} from '@angular/core';
import {BaseImageComponent} from '../base-image/base-image.component';

@Component({
  selector: 'app-image-profile',
  templateUrl: './image-profile.component.html',
  styleUrls: ['./image-profile.component.scss']
})
export class ImageProfileComponent extends BaseImageComponent implements OnInit {

  @Input() height = 100;
  @Input() width = 100;


  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
