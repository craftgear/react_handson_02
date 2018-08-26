// src/reducers/todo.js

import {
  FETCH_TODOS_PENDING,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from '../actions/todo';

const initState = {
  items: [],
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  console.log('********* action ', action);
  const { type, payload, error } = action;
  switch (type) {
    case FETCH_TODOS_PENDING:
      return { ...state, loading: true };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        items: payload,
        loading: false,
      };
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        error,
        loading: false,
      };
    default:
      return state;
  }
};
