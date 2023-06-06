import {State, key} from '../interfaces/state.obj';

const selectJobs = (state: State) => state[key].jobs;

const selectStudies = (state: State) => state[key].studies;

const selectpersonalInfo = (state: State) => state[key].personalInfo;

const selectLanguajes = (state: State) => state[key].languajes;

const selectSkills = (state: State) => state[key].skills;

const selectCourses = (state: State) => state[key].courses;

const selectUsers = (state: State) => state[key].users;

const selectUserInfo = (state: State) => state[key].userInfo;

const systemConfig = (state: State) => state[key].systemConfig;

export {
  selectJobs,
  selectUsers,
  selectUserInfo,
  systemConfig,
  selectStudies,
  selectpersonalInfo,
  selectLanguajes,
  selectCourses,
  selectSkills
};
