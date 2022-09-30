import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, Input, AfterViewInit} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-select-custom',
  templateUrl: './select-custom.component.html',
  styleUrls: ['./select-custom.component.scss']
})
export class SelectCustomComponent implements OnInit, AfterViewInit {

  @Input() Options: Array<any> = [];

  @Input() dIcon = '';

  customIcons = {user : '../../assets/images/user.svg'};

  showOptions = false;

  @ViewChild('Select') Select: ElementRef;

  @Input() title = '';

  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  focusItem = '';

  iconCross = 'cross';

  iconArrow = 'arrow';

  constructor(
      private matIconRegistry: MatIconRegistry,
      private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      this.iconCross,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/images/cross.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      this.iconArrow,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/images/arrow.svg`)
    );
    for (const csIcon in this.customIcons) {
      if (csIcon !== ''){
        this.matIconRegistry.addSvgIcon(
          csIcon,
          this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.customIcons[csIcon]}`)
        );
      }
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.Select.nativeElement.style.setProperty('--opacity', 0);
  }

  onClick($event){
    if (this.showOptions){
      this.Select.nativeElement.style.setProperty('--opacity', 0);
      this.showOptions = false;
    }else{
      this.Select.nativeElement.style.setProperty('--opacity', 1);
      this.showOptions = true;
    }
  }

  SelectItem(item){

    this.Select.nativeElement.style.setProperty('--opacity', 0);
    this.showOptions = false;
    this.focusItem = item.name;
    console.dir(this.focusItem);
    this.onSelect.emit(item);
  }

  unFocus(){
    this.focusItem = '';
  }

  validate_focus(){
    if (this.focusItem === ''){
      return true;
    }
    return false;
  }

}
