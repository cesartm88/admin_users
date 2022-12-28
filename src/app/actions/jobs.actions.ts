import {createAction, props} from '@ngrx/store';
import {JobObj} from '../interfaces/job.obj';


export const addJob = createAction(
  '[job] create',
  props<{ job: JobObj }>()
);
