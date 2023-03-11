import { createReducer, on} from '@ngrx/store';
import {addJob, deleteJob, editJob, AllJobs } from '../actions/jobs.actions';

export const initialState = [];

export const jobReducer = createReducer(
  initialState,
  on(AllJobs, (state, { job }) => {
    return [ job ];
  }),
  on(addJob, (state, { job }) => {
    return [ ...state, job];
  }),
  on(editJob, (state, { job }) => {
    const filtered = state.filter((item) => item.id !== job.id);
    return [ ...filtered, job ];
  }),
  on(deleteJob, (state, { job }) => {
    const newState = state.filter((val) => val.id !== job.id );
    return newState;
  })
);
