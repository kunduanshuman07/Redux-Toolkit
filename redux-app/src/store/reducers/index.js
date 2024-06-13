import { combineReducers } from 'redux';
import cakeReducer from './buyCake';
import userDetailReducer from './userDetail';

const rootReducer = combineReducers({
    cake: cakeReducer,
    userDetail: userDetailReducer
});

export default rootReducer;
