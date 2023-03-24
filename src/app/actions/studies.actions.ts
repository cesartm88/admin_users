import {createAction, props} from '@ngrx/store';
import {JobObj} from '../interfaces/job.obj';
import {StudyObj} from '../interfaces/study.obj';


export const AllStudies = createAction(
  '[saveAllStudies] create',
  props<{ study: any[] }>()
);

export const addStudy = createAction(
  '[study] create',
  props<{ study: StudyObj }>()
);

export const editStudy = createAction(
  '[study] edit',
  props<{ study: StudyObj }>()
);

export const deleteStudy = createAction(
  '[study] delete',
  props<{ study: StudyObj }>()
);
