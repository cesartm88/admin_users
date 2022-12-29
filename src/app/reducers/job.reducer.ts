import { createReducer, on} from '@ngrx/store';
import { addJob } from '../actions/jobs.actions';

export const initialState = [];

export const jobReducer = createReducer(
  initialState,
  on(addJob, (state, { job }) => {
    console.log("state: ", state);
    console.log("job: "  ,  job);
    return [ ...state, job];
  })
);
