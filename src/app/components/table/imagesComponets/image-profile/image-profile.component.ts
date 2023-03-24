import { Component, OnInit } from '@angular/core';
import {BaseImageComponent} from '../base-image/base-image.component';

@Component({
  selector: 'app-image-profile',
  templateUrl: './image-profile.component.html',
  styleUrls: ['./image-profile.component.scss']
})
export class ImageProfileComponent extends BaseImageComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.url = 'https://assets.reedpopcdn.com/bloodborne-preview-1402452338617.jpg/BROK/thumbnail/1200x1200/quality/100/bloodborne-preview-1402452338617.jpg';
  }

}
