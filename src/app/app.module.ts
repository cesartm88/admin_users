import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './modules/root/app.component';

//svg lib
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { LocalStorageService  } from './services/storage/storage.service';
import { CRUDService } from './services/crud/crud.service';
import { SharedModule } from '../app/modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    StorageServiceModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [LocalStorageService, CRUDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
