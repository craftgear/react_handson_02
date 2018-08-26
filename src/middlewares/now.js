// src/middlewares/now.js

export default store => next => action => {
  const actionWithNow = {
    ...action,
    now: Date.now(),
  };

  next(actionWithNow);
};
