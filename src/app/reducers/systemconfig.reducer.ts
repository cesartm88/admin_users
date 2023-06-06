import { createReducer, on} from '@ngrx/store';
import {updateSystemInfo} from '../actions/systemconfig.actions';


export const initialState = {
  loader: false
};

export const systemConfigReducer = createReducer(
  initialState,
  on(updateSystemInfo, (state, { systemConfig }) => {
    return systemConfig;
  })
);
