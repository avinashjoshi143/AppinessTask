import { combineReducers } from "redux";
import {UserReducer} from './userreducer/user.reducer';

const rootReducer = combineReducers({
    user:UserReducer
});

export default rootReducer;