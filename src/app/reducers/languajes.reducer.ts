import { createReducer, on} from '@ngrx/store';
import {addLanguajes, AllLanguajes, deleteLanguajes, editLanguajes} from '../actions/languajes.actions';

export const initialState = [];

export const LanguajesReducer = createReducer(
  initialState,
  on(AllLanguajes, (state, { languajes }) => {
    return languajes;
  }),
  on(addLanguajes, (state, { languajes }) => {
    return [ ...state, languajes];
  }),
  on(editLanguajes, (state, { languajes }) => {
    const filtered = state.filter((item) => item.id !== languajes.id);
    return [ ...filtered, languajes ];
  }),
  on(deleteLanguajes, (state, { languajes }) => {
    const newState = state.filter((val) => val.id !== languajes.id );
    return newState;
  })
);
