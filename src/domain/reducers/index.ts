import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import alert from './alert';
import user from './user';

const reducer = combineReducers({
  alert,
  user,
});

const createConfiguredStore = (middlewares: any) =>
  configureStore({
    reducer,
    middleware: middlewares,
  });

export default createConfiguredStore;
