import { combineEpics, createEpicMiddleware } from 'redux-observable';
import fetchTodoEpic from './todo';

const rootEpic = combineEpics(fetchTodoEpic);
export const epicMiddleware = createEpicMiddleware();
export const runEpics = () => epicMiddleware.run(rootEpic); // applyMiddlewareのあとにおくこと
