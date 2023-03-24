import { createReducer, on} from '@ngrx/store';
import {addPersonalInfo, AllPersonalInfo, deletePersonalInfo, editPersonalInfo} from '../actions/personalInfo.actions';

export const initialState = [];

export const personalInfoReducer = createReducer(
  initialState,
  on(AllPersonalInfo, (state, { personalInfo }) => {
    return personalInfo;
  }),
  on(addPersonalInfo, (state, { personalInfo }) => {
    return [ ...state, personalInfo];
  }),
  on(editPersonalInfo, (state, { personalInfo }) => {
    const filtered = state.filter((item) => item.id !== personalInfo.id);
    return [ ...filtered, personalInfo ];
  }),
  on(deletePersonalInfo, (state, { personalInfo }) => {
    const newState = state.filter((val) => val.id !== personalInfo.id );
    return newState;
  })
);
