import React from 'react';
import {ListContainer} from './userlist.styles';

export const UserList = ({id,name,email,age,gender,phoneNo})=> {
    return(

        <ListContainer className="list-container"> 
            id : {id} <br />
            name: {name} <br />
            email: {email} <br />
            age: {age} <br />
            gender: {gender} <br />
            phoneNo: {phoneNo}
        </ListContainer>
    );
}

export default UserList;