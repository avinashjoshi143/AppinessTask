import React from 'react';
import {SignInContainer,
    SignInTitle,
    CustomButtonContainer} from './loginpage.styles';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {setCurrentUser} from '../../redux/userreducer/user.actions';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsValid} from '../../redux/userreducer/user.selector';


class LoginPage extends React.Component {

    constructor(){
        super();
        this.state = {
            username:"",
            password:""
        }
    }
    

    handleSubmit = (event)=> {
        event.preventDefault();
        const user = this.state
        this.props.setCurrentUser(user);
        this.setState({username:"",password:""})
    }

    handleChange = (event)=> {
        const {name,value} = event.target;
        this.setState({...this.state, [name]:value});
    }


    render() {
        const {isValid} = this.props;
        return (
            <SignInContainer className="signin">
                <SignInTitle> I already have an account</SignInTitle>
                <span>Sign in with your username and password</span>
                {
                    isValid ? "" : (<p style={{color:"red"}}>please use valid username or password</p>) 
                }
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email"
                    name="username"
                    handleChange={this.handleChange}
                    value={this.state.username}
                    label = "Username"
                    required
                    />

                    <FormInput 
                    type="password"
                    name="password"
                    handleChange={this.handleChange}
                    value={this.state.password}
                    label="password"
                    required
                    />
                    <CustomButtonContainer>
                        <CustomButton type="submit">Sign In</CustomButton>
                    </CustomButtonContainer>
                </form>
            </SignInContainer>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isValid : selectIsValid
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
