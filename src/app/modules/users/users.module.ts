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
import { StudiesComponent } from './ModuleComponents/studies/studies.component';
import { PersonalInfoComponent } from './ModuleComponents/personal-info/personal-info.component';
import { LanguajesComponent } from './ModuleComponents/languajes/languajes.component';
import { CoursesComponent } from './ModuleComponents/courses/courses.component';



@NgModule({
  declarations: [ ListUsersComponent, AdminThemeComponent, JobsComponent, HeaderComponent, LoginComponent, StudiesComponent, PersonalInfoComponent, LanguajesComponent, CoursesComponent],
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

