import * as types from '../constants/ActionsTypes';

let initialState = false; // Form is closed

/* jshint ignore:start */
/**
 * @param {boolean} state
 * @param {object} action
 */
let reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.TOOGLE_FORM:
      return !state;
    case types.OPEN_FORM:
      return true;
    case types.CLOSE_FORM:
      return false;
    default:
      return state;
  }
};
/* jshint ignore:end */

export default reducer;