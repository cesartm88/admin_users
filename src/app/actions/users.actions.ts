import {createAction, props} from '@ngrx/store';
import {User} from '../models/User';


export const updateInfo = createAction(
  '[userInfo] create',
  props<{ user: User }>()
);

export const deleteInfo = createAction(
  '[userInfo] delete',
  props<{ user: User }>()
);
