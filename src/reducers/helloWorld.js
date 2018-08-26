// src/reducers/helloWorld.js

import { UPDATE_GREETING } from '../actions';

const initState = {
  greeting: 'こんにちは',
  to: '世界',
};

const helloWorld = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_GREETING: {
      return {
        ...state,
        greeting: action.now,
      };
    }
    default:
      return state;
  }
};

export default helloWorld;
