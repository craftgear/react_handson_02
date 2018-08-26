// src/actins/todo.js

import request from 'request-promise-native';

export const FETCH_TODOS_PENDING = 'FETCH_TODOS_PENDING';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

// export default () => async dispatch => {
// dispatch({ type: FETCH_TODOS_PENDING });
// try {
// const res = await request({
// uri: 'http://localhost:3000/dummy_todos.json',
// json: true,
// });

// dispatch({
// type: FETCH_TODOS_SUCCESS,
// payload: res.data,
// });
// } catch (e) {
// dispatch({ type: FETCH_TODOS_FAILURE, error: e });
// }
// };

export default () => ({ type: FETCH_TODOS_PENDING });
