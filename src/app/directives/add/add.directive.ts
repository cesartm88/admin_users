import { Directive,ViewContainerRef,ComponentFactoryResolver,Input, Component } from '@angular/core';
import { CardComponent   } from '../../components/table/card/card.component';

@Directive({
  selector: '[ad-host]',
})
export class AdDirective {
  @Input() component;
  constructor(public viewContainerRef: ViewContainerRef,private cFR:ComponentFactoryResolver) {
    
  }

  ngOnInit() {
    console.log(this.component);
    const componentFactory = this.cFR.resolveComponentFactory(CardComponent);
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
  }
}