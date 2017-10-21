/**
 * Returns a generic action with a data property.
 *
 * @param {string} type
 * @param {*} data
 * @returns {*} action
 */
export const createAction = (type, data) => ({
  type,
  data,
});
