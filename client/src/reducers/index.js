import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import users from './users_custom';

const rootReducer = combineReducers({
  user,
  flash,
  users
});

export default rootReducer;
