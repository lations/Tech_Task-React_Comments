import { combineReducers } from 'redux';
import commentReducer from './CommentsReducer';

const rootReducer = combineReducers({
  mainReducer: commentReducer
});

export default rootReducer;
