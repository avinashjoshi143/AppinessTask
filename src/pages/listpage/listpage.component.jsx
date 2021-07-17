import React from 'react';
import { UserList } from '../../components/userlist/userlist.component';
import { ListPageContainer } from './listpage.styles';
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux';
import { selectList } from '../../redux/userreducer/user.selector';

const ListPage = ({userList})=> {
    console.log(userList);

    return (
        <ListPageContainer>
            {
                userList.map(user=> (
                    <UserList key={user.id} {...user} />
                ))
            }
        </ListPageContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    userList:selectList
})

export default connect(mapStateToProps)(ListPage);