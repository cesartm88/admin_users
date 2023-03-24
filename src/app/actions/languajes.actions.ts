import {createAction, props} from '@ngrx/store';
import {JobObj} from '../interfaces/job.obj';
import {StudyObj} from '../interfaces/study.obj';
import {PersonalInfoObj} from '../interfaces/personalInfo.obj';
import {LanguajeObj} from '../interfaces/languaje.obj';


export const AllLanguajes = createAction(
  '[saveAllLAnguajes] create',
  props<{ languajes: any[] }>()
);

export const addLanguajes = createAction(
  '[Languajes] create',
  props<{ languajes: LanguajeObj }>()
);

export const editLanguajes = createAction(
  '[Languajes] edit',
  props<{ languajes: LanguajeObj }>()
);

export const deleteLanguajes = createAction(
  '[Languajes] delete',
  props<{ languajes: LanguajeObj }>()
);
