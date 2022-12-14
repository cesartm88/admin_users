import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
} from '@angular/core';
import { DialogModule } from './dialog.module';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Injectable({
  providedIn: DialogModule,
})
export class DialogService {

  dialogRef: MatDialogRef<any>;

  constructor(
    public dialog: MatDialog
  ) {}

  public close(data?: object){
    this.dialogRef.close({data: data});
  }

  public open(componentType, args?) {
    this.dialogRef = this.dialog.open(componentType, {
      data : args
    });
    return this.dialogRef;
  }
}
