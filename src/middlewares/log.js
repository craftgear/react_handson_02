// src/middlewares/log.js

export default store => next => action => {
  console.info(`TYPE: ${action.type}, PAYLOAD: ${action.payload}`);
  next(action);
};
