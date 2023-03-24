import {MenuObj} from '../interfaces/menu.obj';

export const MENU_CONFIG: Array<MenuObj> = [
  {
    name: 'Usuarios',
    path: '/users/list',
    class: 'list'
  },
  {
    name: 'Información Personal',
    path: '/users/personalInfo',
    class: 'personalInfo'
  },
  {
    name: 'Idiomas',
    path: '/users/languajes',
    class: 'languajes'
  },
  {
    name: 'Jobs',
    path: '/users/jobs',
    class: 'jobs'
  },
  {
    name: 'Studies',
    path: '/users/studies',
    class: 'studies'
  },
  {
    name: 'Cursos y Diplomados',
    path: '/users/courses',
    class: 'courses'
  }
];
