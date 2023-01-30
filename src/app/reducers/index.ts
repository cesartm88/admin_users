import {
  ActionReducer,
  ActionReducerMap, combineReducers,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { jobReducer } from './job.reducer';
import {localStorageSync} from 'ngrx-store-localstorage';
import { State } from '../interfaces/state.obj';
import {userReducer} from './user.reducer';

const key = 's1jdD3LHsZ=';


export const reducers: ActionReducerMap< State > = {
  [key]: combineReducers({
     jobs: jobReducer,
     users: userReducer
  })
};

const reducersKey = [key];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducersKey, rehydrate: true, storage: window.sessionStorage})(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
