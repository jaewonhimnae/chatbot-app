import { combineReducers } from 'redux';
import message from './message_reducer';

const rootReducer = combineReducers({
    message,
});

export default rootReducer;