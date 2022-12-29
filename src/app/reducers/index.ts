import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { jobReducer } from './job.reducer';
import {localStorageSync} from 'ngrx-store-localstorage';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['todos']})(reducer);
}


export interface State {
  jobs
}

export const reducers: ActionReducerMap<State> = {
  jobs: jobReducer
};


export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
