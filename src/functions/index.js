// TODO: random id
export const randomID = () => {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

// TODO: generate id
export const generateID = () => {
  return(randomID() + randomID() + '-' + randomID() + randomID());
};

/**
 * TODO: find index position
 * NOTE: If index is finded, return index. Opposite, return -1
 * @param {array} tasks
 * @param {string} id
 */
export const findIndex = (tasks, id) => {
  let result = -1;
  tasks.forEach((task, index) => {
    if(task.id === id) {
      result = index;
    }
  });
  return result;
};