import * as types from '../constants/ActionsTypes';

export const showAllTasks = () => {
  return {
    type: types.SHOW_ALL_TASKS
  };
};

export const toggleForm = () => {
  return {
    type: types.TOOGLE_FORM
  };
};

export const openForm = () => {
  return {
    type: types.OPEN_FORM
  };
};

export const closeForm = () => {
  return {
    type: types.CLOSE_FORM
  };
};

/**
 * @param {object} task
 */
export const saveTask = task => {
  return {
    type: types.SAVE_TASK,
    task
  };
};

/**
 * @param {object} task
 */
export const editTask = task => {
  return {
    type: types.EDIT_TASK,
    task
  };
};

/**
 * @param {string} id
 */
export const deleteTask = id => {
  return {
    type: types.DELETE_TASK,
    id
  };
};

/**
 * @param {string} id
 */
export const toggleStatus = id => {
  return {
    type: types.UPDATE_STATUS_TASK,
    id
  };
};

/**
 * TODO: filter inside table
 * @param {object} filter ({filterName, filterStatus})
 */
export const filterTask = filter => {
  return {
    type: types.FILTER_IN_TABLE,
    filter // => mean: {filterName, filterStatus}
  };
};

/**
 * TODO: search task name outside table
 * @param {string} keyword
 */
export const searchTask = keyword => {
  return {
    type: types.SEARCH_TASK,
    keyword
  };
};

/**
 * TODO: sort task by order
 * @param {object} sort ({sortBy, sortValue})
 */
export const sortTask = sort => {
  return {
    type: types.SORT_TASK,
    sort // => mean: {sortBy, sortValue}
  };
};