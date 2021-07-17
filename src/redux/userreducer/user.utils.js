import {validUser} from './data';

export const ValidateUSer = user => {

    if(validUser.username === user.username && validUser.password === user.password){
        return user;
    }
    else {
        return null;
    }
}
