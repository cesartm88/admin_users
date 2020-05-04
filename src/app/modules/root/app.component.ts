import { Component,Input,ViewChild,ComponentFactoryResolver } from '@angular/core';
import { AdDirective     } from '../../directives/add/add.directive';
import { CardComponent   } from '../../components/table/card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'users';
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;

  constructor() { }


  ngOnInit() {
  
  }

  ngOnDestroy() {
   
  }


}
