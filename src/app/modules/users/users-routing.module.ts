import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './ModuleComponents/list-users/list-users.component';
import { JobsComponent } from './ModuleComponents/jobs/jobs.component';
import { LoginComponent } from './ModuleComponents/login/login.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListUsersComponent,
    data: {
      element: 'list'
    }
  },
  {
    path: 'jobs',
    component: JobsComponent,
    data: {
      element: 'jobs'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      element: 'login'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }
