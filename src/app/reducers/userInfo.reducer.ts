import { createReducer, on} from '@ngrx/store';
import {deleteInfo, updateInfo} from '../actions/userInfo.actions';


export const initialState = {
  name: '',
  email: '',
  token: ''
};

export const userInfoReducer = createReducer(
  initialState,
  on(updateInfo, (state, { userInfo }) => {
    return userInfo;
  }),
  on(deleteInfo, (state, { userInfo }) => {
    return initialState;
  })
);
