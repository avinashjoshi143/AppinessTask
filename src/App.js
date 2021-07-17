import './App.css';
import React from 'react';
import LoginPage from './pages/loginpage/loginpage.component';
import {Route,Switch,Redirect} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux';
import { selectCurrentUser } from './redux/userreducer/user.selector';
import ListPage  from './pages/listpage/listpage.component';

const App = ({currentUser})=> {

    return (
      <div className="App">
            <Switch>
            <Route exact path='/' render = {()=> currentUser ? <Redirect to ="/list" /> : <LoginPage /> } />
            <Route exact path='/list' render={()=> currentUser ? <ListPage /> : <Redirect to="/" /> } />
            </Switch>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
