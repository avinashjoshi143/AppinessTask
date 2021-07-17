import { UserActionType } from "./user.actiontype";
import { ValidateUSer} from "./user.utils";
import {list} from './data';

const INITIAL_STATE = {
    currentUser:null,
    list:list,
    isValid: true
}

export const UserReducer = (state=INITIAL_STATE,action)=> {
    switch(action.type){
        case UserActionType.SET_CURRENT_USER :
            return {
                ...state,
                isValid: ValidateUSer(action.payload) ? true : false,
                currentUser: ValidateUSer(action.payload)
            }
        default: return state;
    }
}