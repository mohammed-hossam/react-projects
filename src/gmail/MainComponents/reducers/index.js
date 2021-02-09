import { combineReducers } from 'redux';
import authReducer from './authReducer';
import selectMailReducer from './selectMailReducer';
import sendMsgReducer from './sendMsgReducer';

export default combineReducers({
  sendMsgReducer: sendMsgReducer,
  selectMailReducer: selectMailReducer,
  authReducer: authReducer,
});
