import * as types from '../constants/ActionsTypes';

let initialState = '';

/* jshint ignore:start */
/**
 * @param {string} state
 * @param {object} action
 */
let reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SEARCH_TASK:
      return action.keyword;
    default:
      return state;
  }
};
/* jshint ignore:end */

export default reducer;