import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './ModuleComponents/list-users/list-users.component';


const routes:Routes = [
  { 
    path: '**', 
    component:ListUsersComponent,
    pathMatch: 'full' 
  },
  {path:'users/list',component:ListUsersComponent        }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }
