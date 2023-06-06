import {createAction, props} from '@ngrx/store';
import {JobObj} from '../interfaces/job.obj';
import {StudyObj} from '../interfaces/study.obj';
import {CoursesObj} from '../interfaces/courses.obj';


export const AllCourses = createAction(
  '[saveAllCourses] create',
  props<{ courses: any[] }>()
);

export const addCourses = createAction(
  '[Courses] create',
  props<{ courses: CoursesObj }>()
);

export const editCourses = createAction(
  '[Courses] edit',
  props<{ courses: CoursesObj }>()
);

export const deleteCourses = createAction(
  '[Courses] delete',
  props<{ courses: CoursesObj }>()
);
