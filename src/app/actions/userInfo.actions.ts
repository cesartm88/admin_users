import {createAction, props} from '@ngrx/store';
import {UserInfo} from '../models/UserInfo';

export const updateInfo = createAction(
  '[userInfo] create',
  props<{ userInfo: UserInfo }>()
);

export const deleteInfo = createAction(
  '[userInfo] delete',
  props<{ userInfo: UserInfo }>()
);
