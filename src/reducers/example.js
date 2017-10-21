const initialState = {};

const handlers = {};

export default (state = initialState, action) =>
  (handlers[action.type] ? handlers[action.type](state, action) : state);
