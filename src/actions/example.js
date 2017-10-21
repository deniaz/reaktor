import { createAction } from './';

export const GET_EXAMPLE = 'GET_EXAMPLE';
export const GET_EXAMPLE_SUCCESS = 'GET_EXAMPLE_SUCCESS';

export const createGetExample = () => async (dispatch) => {
  dispatch(createAction(GET_EXAMPLE));
  // const response = await fetch('http://example.com');
  dispatch(createAction(GET_EXAMPLE, { foo: 'bar' }));
};
