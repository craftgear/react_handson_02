// src/actins/index.js

import request from 'request-promise-native';

export const UPDATE_GREETING = 'UPDATE_GREETING';
export const updateGreeting = greeting => async dispatch => {
  // request({
  // uri: 'http://localhost:3000/greeting.json',
  // json: true,
  // }).then(res => {
  // dispatch({
  // type: UPDATE_GREETING,
  // payload: res.data,
  // });
  // });
  const res = await request({
    uri: 'http://localhost:3000/greeting.json',
    json: true,
  });
  dispatch({
    type: UPDATE_GREETING,
    payload: res.data,
  });
};
