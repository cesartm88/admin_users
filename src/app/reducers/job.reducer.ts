import { createReducer, on} from '@ngrx/store';
import { addJob } from '../actions/jobs.actions';

export const initialState = [];

export const jobReducer = createReducer(
  initialState,
  on(addJob, (state, { job }) => {
    return [ ...state, job];
  })
);
