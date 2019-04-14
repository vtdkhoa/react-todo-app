import * as types from '../constants/ActionsTypes';

let initialState = {
  id: '',
  name: '',
  status: false
};

/* jshint ignore:start */
/**
 * @param {object} state
 * @param {object} action
 */
let reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.EDIT_TASK:
      return action.task;
    default:
      return state;
  }
};
/* jshint ignore:end */

export default reducer;