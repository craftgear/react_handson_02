// src/epics/todo.js

import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, map, catchError, tap, delay } from 'rxjs/operators';
import request from 'request-promise-native';
import { ajax } from 'rxjs/ajax';
export default action$ =>
  action$.pipe(
    ofType('FETCH_TODOS_PENDING'),
    switchMap(
      action =>
        ajax.getJSON('http://localhost:3000/dummy_todos.json').pipe(
          map(response => {
            return {
              type: 'FETCH_TODOS_SUCCESS',
              payload: response.data,
            };
          }),
          catchError(error =>
            of({
              type: 'FETCH_TODOS_FAILURE',
              payload: error.message,
              error: true,
            })
          )
        )

      /*  Promiseバージョン */
      // request({
      // uri: 'http://localhost:3000/dummy_todos.json',
      // json: true,
      // })
      // .then(res => ({
      // type: 'FETCH_TODOS_SUCCESS',
      // payload: res.data,
      // }))
      // .catch(e => ({ type: 'FETCH_TODOS_FAILURE', error: e }))
    )
  );
