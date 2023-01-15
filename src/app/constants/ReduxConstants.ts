import {State, key} from '../interfaces/state.obj';

const selectJobs = (state: State) => state[key].jobs;

export {
  selectJobs
};
