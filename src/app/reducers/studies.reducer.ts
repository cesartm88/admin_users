import { createReducer, on} from '@ngrx/store';
import {addJob, deleteJob, editJob, AllJobs } from '../actions/jobs.actions';
import {addStudy, AllStudies, deleteStudy, editStudy} from '../actions/studies.actions';

export const initialState = [];

export const studiesReducer = createReducer(
  initialState,
  on(AllStudies, (state, { study }) => {
    return study;
  }),
  on(addStudy, (state, { study }) => {
    return [ ...state, study];
  }),
  on(editStudy, (state, { study }) => {
    const filtered = state.filter((item) => item.id !== study.id);
    return [ ...filtered, study ];
  }),
  on(deleteStudy, (state, { study }) => {
    const newState = state.filter((val) => val.id !== study.id );
    return newState;
  })
);
