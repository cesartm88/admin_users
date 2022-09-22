import { Component, OnInit,EventEmitter, Output,ViewChild,ElementRef, Input } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-select-custom',
  templateUrl: './select-custom.component.html',
  styleUrls: ['./select-custom.component.scss']
})
export class SelectCustomComponent implements OnInit {

  @Input() Options:Array<any> = [];

  showOptions:boolean = false;

  @Output() onSelect:EventEmitter<any> = new EventEmitter();

  @ViewChild('Select') Select:ElementRef;

  @Input() title:String="";

  @Input() icon:String="";

  focusItem:String = "";

  constructor(
      private matIconRegistry: MatIconRegistry,
      private domSanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    console.log(this.icon);
  }

  ngAfterViewInit(){
    this.matIconRegistry.addSvgIcon(
      "cross",
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/images/cross.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      "arrow",
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/images/arrow.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      "user",
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.icon}`)
    );
    this.Select.nativeElement.style.setProperty("--opacity",0);
  }

  onClick($event){
    if(this.showOptions){
      this.Select.nativeElement.style.setProperty("--opacity",0);
      this.showOptions = false;
    }else{
      this.Select.nativeElement.style.setProperty("--opacity",1);
      this.showOptions = true;
    }

  }

  SelectItem(item){
    this.Select.nativeElement.style.setProperty("--opacity",0);
    this.showOptions = false;
    this.focusItem = item.name;
    this.onSelect.emit(item);
  }

  unfocus(){
    this.focusItem = "";
  }


  validate_focus():boolean{
    if(this.focusItem != ""){
      return true;
    }
  return false;
  }

}
