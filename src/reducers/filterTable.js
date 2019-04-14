import * as types from '../constants/ActionsTypes';

let initialState = {
  name: '',
  status: -1
};

/* jshint ignore:start */
/**
 * @param {object} state
 * @param {object} action
 */
let reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FILTER_IN_TABLE:
      return {
        name: action.filter.name,
        status: parseInt(action.filter.status)
      };
    default:
      return state;
  }
};
/* jshint ignore:end */

export default reducer;