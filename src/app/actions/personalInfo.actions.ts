import {createAction, props} from '@ngrx/store';
import {JobObj} from '../interfaces/job.obj';
import {StudyObj} from '../interfaces/study.obj';
import {PersonalInfoObj} from '../interfaces/personalInfo.obj';


export const AllPersonalInfo = createAction(
  '[saveAllpf] create',
  props<{ personalInfo: any[] }>()
);

export const addPersonalInfo = createAction(
  '[pf] create',
  props<{ personalInfo: PersonalInfoObj }>()
);

export const editPersonalInfo = createAction(
  '[pf] edit',
  props<{ personalInfo: PersonalInfoObj }>()
);

export const deletePersonalInfo = createAction(
  '[pf] delete',
  props<{ personalInfo: PersonalInfoObj }>()
);
