import { createReducer, on} from '@ngrx/store';
import {addJob, deleteJob, editJob} from '../actions/jobs.actions';
import {addUser, deleteUser, editUser} from '../actions/users.actions';

export const initialState = [];

export const userReducer = createReducer(
  initialState,
  on(addUser, (state, { user }) => {
    return [ ...state, user];
  }),
  on(editUser, (state, { user }) => {
    const filtered = state.filter((item) => item.sync !== user.sync);
    return [ ...filtered, user ];
  }),
  on(deleteUser, (state, { user }) => {
    const newState = state.filter((val) => val.sync !== user.sync );
    return newState;
  })
);
