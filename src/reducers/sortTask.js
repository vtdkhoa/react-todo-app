import * as types from '../constants/ActionsTypes';

let initialState = {
  by: 'name',
  value: 1
};

/* jshint ignore:start */
/**
 * @param {object} state
 * @param {object} action
 */
let reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SORT_TASK:
      return {
        by: action.sort.by,
        value: action.sort.value
      };
    default:
      return state;
  }
};
/* jshint ignore:end */

export default reducer;