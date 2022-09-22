import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './ModuleComponents/list-users/list-users.component';
import { JobsComponent } from './ModuleComponents/jobs/jobs.component';


const routes:Routes = [
  /*{
    path: '**',
    component:ListUsersComponent,
    pathMatch: 'full'
  },*/
  {
    path:'list',
    component:ListUsersComponent,
    //pathMatch: 'full'
    data:{
      element:'list'
    }
  },
  {
    path:'jobs',
    component:JobsComponent,
    //pathMatch: 'full'
    data:{
      element:'jobs'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }
