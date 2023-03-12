import {State, key} from '../interfaces/state.obj';

const selectJobs = (state: State) => state[key].jobs;

const selectUsers = (state: State) => state[key].users;

const selectUserInfo = (state: State) => state[key].userInfo;

const systemConfig = (state: State) => state[key].systemConfig;

export {
  selectJobs,
  selectUsers,
  selectUserInfo,
  systemConfig
};
