import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule  } from './users-routing.module';
import { ListUsersComponent  } from './ModuleComponents/list-users/list-users.component';
import { AdminThemeComponent } from '../../themes/admin-theme/admin-theme.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { SharedModule } from '../shared/shared.module';
import { JobsComponent } from './ModuleComponents/jobs/jobs.component';
import { HeaderComponent } from './components/index';
import { LoginComponent } from './ModuleComponents/login/login.component';



@NgModule({
  declarations: [ ListUsersComponent, AdminThemeComponent, JobsComponent, HeaderComponent, LoginComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ]
})
export class UsersModule { }

