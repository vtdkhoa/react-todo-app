import * as types from './../constants/ActionsTypes';
import { generateID, findIndex } from '../functions/index';

let data = JSON.parse(localStorage.getItem('tasks'));
const initialState = data ? data : [];

/* jshint ignore:start */
/**
 * @param {array} state
 * @param {object} action
 */
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SHOW_ALL_TASKS:
      return state;
    // begin: SAVE_TASK
    case types.SAVE_TASK:
    {
      let task = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status ? true : false
      };
      // NOTE: If id is empty, add new ask. Opposite, edit old task
      if(!task.id) {
        task.id = generateID();
        state.push(task);
      } else {
        let index = findIndex(state, task.id);
        state[index] = task; // => After edit, overwrite on old task
      }
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    }
    // end: SAVE_TASK
    // begin: DELETE_TASK
    case types.DELETE_TASK:
    {
      let id = action.id;
      let index = findIndex(state, id);
      state.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    }
    // end: DELETE_TASK
    // begin: UPDATE_STATUS_TASK
    case types.UPDATE_STATUS_TASK:
    {
      let id = action.id;
      let index = findIndex(state, id);
      // ! Bad solution: state[index].status = !state[index].status;
      // ? Good solutions
      // => Solution 1:
      /** NOTE:
       * cloneTask = state[index] && status = !status
       * state[index]: index position
       * Delete old task => push new task into array
       */
      // let cloneTask = {...state[index]};
      // cloneTask.status = !cloneTask.status;
      // state[index] = cloneTask; // => Overwrite cloneTask on state[index]
      // => Solution 2:
      state[index] = {...state[index], status: !state[index].status}; // => Object
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    }
    // end: UPDATE_STATUS_TASK
    default:
      return state;
  }
};
/* jshint ignore:end */

export default reducer;