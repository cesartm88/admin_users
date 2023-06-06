import {createAction, props} from '@ngrx/store';
import {SkillsObj} from '../interfaces/skills.obj';


export const Allskills = createAction(
  '[saveAllSkills] create',
  props<{ skills: any[] }>()
);

export const addskills = createAction(
  '[skills] create',
  props<{ skills: SkillsObj }>()
);

export const editskills = createAction(
  '[skills] edit',
  props<{ skills: SkillsObj }>()
);

export const deleteskills = createAction(
  '[skills] delete',
  props<{ skills: SkillsObj }>()
);
