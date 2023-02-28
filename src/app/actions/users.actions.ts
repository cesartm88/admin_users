
import {createAction, props} from '@ngrx/store';
import {User} from '../models/User';

export const addUser = createAction(
  '[user] create',
  props<{ user: User }>()
);

export const editUser = createAction(
  '[user] edit',
  props<{ user: User }>()
);

export const deleteUser = createAction(
  '[user] delete',
  props<{ user: User }>()
);

