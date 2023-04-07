import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './ModuleComponents/list-users/list-users.component';
import { JobsComponent } from './ModuleComponents/jobs/jobs.component';
import { LoginComponent } from './ModuleComponents/login/login.component';
import {AuthGuardService} from '../../services/auth-guard.service';
import {StudiesComponent} from './ModuleComponents/studies/studies.component';
import {PersonalInfoComponent} from './ModuleComponents/personal-info/personal-info.component';
import {LanguajesComponent} from './ModuleComponents/languajes/languajes.component';
import {CoursesComponent} from './ModuleComponents/courses/courses.component';
import {SkillsComponent} from './ModuleComponents/skills/skills.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListUsersComponent,
    data: {
      element: 'list'
    },
    canActivate: [AuthGuardService]
  },
  {
    path: 'personalInfo',
    component: PersonalInfoComponent,
    data: {
      element: 'personalInfo'
    },
    canActivate: [AuthGuardService]
  },
  {
    path: 'languajes',
    component: LanguajesComponent,
    data: {
      element: 'languajes'
    },
    canActivate: [AuthGuardService]
  },
  {
    path: 'courses',
    component: CoursesComponent,
    data: {
      element: 'courses'
    },
    canActivate: [AuthGuardService]
  },
  {
    path: 'jobs',
    component: JobsComponent,
    data: {
      element: 'jobs'
    },
    canActivate: [AuthGuardService]
  },
  {
    path: 'studies',
    component: StudiesComponent,
    data: {
      element: 'studies'
    },
    canActivate: [AuthGuardService]
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: {
      element: 'skills'
    },
    canActivate: [AuthGuardService]
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
