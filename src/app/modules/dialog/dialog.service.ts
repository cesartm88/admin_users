import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
} from '@angular/core';
import { DialogModule } from './dialog.module';
import { DialogComponent } from './dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: DialogModule,
})
export class DialogService {
  constructor(
    public dialog: MatDialog
  ) {}

  public close(){
    this.dialog.closeAll();
  }

  public open(componentType, args?) {
    const dialogRef = this.dialog.open(componentType, {
      data : args
    });

    dialogRef.afterClosed().subscribe(result => {
      /**
       * result is what you get after you close the Modal
       */
    });
  }
}
