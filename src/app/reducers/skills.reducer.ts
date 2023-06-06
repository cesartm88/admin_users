import { createReducer, on} from '@ngrx/store';
import {addLanguajes, AllLanguajes, deleteLanguajes, editLanguajes} from '../actions/languajes.actions';
import {addskills, Allskills, deleteskills, editskills} from '../actions/skills.actions';

export const initialState = [];

export const skillsReducer = createReducer(
  initialState,
  on(Allskills, (state, { skills }) => {
    return skills;
  }),
  on(addskills, (state, { skills }) => {
    return [ ...state, skills];
  }),
  on(editskills, (state, { skills }) => {
    const filtered = state.filter((item) => item.id !== skills.id);
    return [ ...filtered, skills ];
  }),
  on(deleteskills, (state, { skills }) => {
    const newState = state.filter((val) => val.id !== skills.id );
    return newState;
  })
);
