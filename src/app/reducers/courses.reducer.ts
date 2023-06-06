import { createReducer, on} from '@ngrx/store';
import {addCourses, AllCourses, deleteCourses, editCourses} from '../actions/courses.actions';

export const initialState = [];

export const coursesReducer = createReducer(
  initialState,
  on(AllCourses, (state, { courses }) => {
    return courses;
  }),
  on(addCourses, (state, { courses }) => {
    return [ ...state, courses];
  }),
  on(editCourses, (state, { courses }) => {
    const filtered = state.filter((item) => item.id !== courses.id);
    return [ ...filtered, courses ];
  }),
  on(deleteCourses, (state, { courses }) => {
    const newState = state.filter((val) => val.id !== courses.id );
    return newState;
  })
);
