import {createAction, props} from '@ngrx/store';
import {SystemConfig} from '../models/SystemConfig';

export const updateSystemInfo = createAction(
  '[systemConfig] create',
  props<{ systemConfig: SystemConfig }>()
);
