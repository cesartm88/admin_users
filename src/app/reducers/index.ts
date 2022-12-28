import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { jobReducer } from './job.reducer';

export interface State {
  jobs
}

export const reducers: ActionReducerMap<State> = {
  jobs: jobReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
