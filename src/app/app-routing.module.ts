import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotfoundComponent} from './modules/users/ModuleComponents/notfound/notfound.component';


const routes: Routes = [
  /*{
    path: '**',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
    pathMatch: 'full'
  },*/
  {
    path        : 'users',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  /** Wild Card Route for 404 request */
  { path: '**',
    pathMatch: 'full',
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
