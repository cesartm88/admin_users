import {createAction, props} from '@ngrx/store';
import {JobObj} from '../interfaces/job.obj';


export const AllJobs = createAction(
  '[saveAllJobs] create',
  props<{ job: JobObj }>()
);

export const addJob = createAction(
  '[job] create',
  props<{ job: JobObj }>()
);

export const editJob = createAction(
  '[job] edit',
  props<{ job: JobObj }>()
);

export const deleteJob = createAction(
  '[job] delete',
  props<{ job: JobObj }>()
);
