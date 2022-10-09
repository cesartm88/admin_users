import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule  } from './users-routing.module';
import { ListUsersComponent  } from './ModuleComponents/list-users/list-users.component';
import { AdminThemeComponent } from '../../themes/admin-theme/admin-theme.component';

import { SharedModule } from '../shared/shared.module';
import { JobsComponent } from './ModuleComponents/jobs/jobs.component';
import { HeaderComponent } from './components/index';



@NgModule({
  declarations: [ ListUsersComponent, AdminThemeComponent, JobsComponent, HeaderComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ]
})
export class UsersModule { }

