// @flow
import { combineReducers } from 'redux-immutable';
import { routerReducer as routing } from 'react-router-redux';
import home from './home';

const rootReducer = combineReducers({
  routing,
  home
});

export default rootReducer;
