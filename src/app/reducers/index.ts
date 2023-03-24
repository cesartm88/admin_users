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
import {userInfoReducer} from './userInfo.reducer';
import {systemConfigReducer} from './systemconfig.reducer';
import {studiesReducer} from './studies.reducer';
import {personalInfoReducer} from './personalInfo.reducer';
import {coursesReducer} from './courses.reducer';
import {LanguajesReducer} from './languajes.reducer';

const key = 's1jdD3LHsZ=';


export const reducers: ActionReducerMap< State > = {
  [key]: combineReducers({
     jobs: jobReducer,
     users: userReducer,
     userInfo: userInfoReducer,
     systemConfig: systemConfigReducer,
     studies: studiesReducer,
     personalInfo: personalInfoReducer,
     courses: coursesReducer,
     languajes: LanguajesReducer
  })
};

const reducersKey = [key];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducersKey, rehydrate: true, storage: window.sessionStorage})(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
