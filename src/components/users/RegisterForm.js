import React from 'react';
import {TextField, RaisedButton, FlatButton} from 'material-ui';
import {Link} from 'react-router-dom';


export const RegisterForm = ({email, username, password, password2, handleNewUser, signUp}) => (
    <div className="log-form">
        <h2>Register</h2>
        <form action="" onSubmit={signUp}>
        <TextField
            onChange={handleNewUser}
            hintText="usuario@company.com"
            floatingLabelFixed={true}
            floatingLabelText="Email"
            fullWidth={true}
            type={'email'}
            name={'email'}
            /><br />
            <TextField
                onChange={handleNewUser}
            hintText="username"
            floatingLabelFixed={true}
            floatingLabelText="Username"
            fullWidth={true}
            name={'username'}
            /><br />
        <TextField
            name={'password'}
            onChange={handleNewUser}
            fullWidth={true}
            hintText="**********"
            type={'password'}
            floatingLabelFixed={true}
            floatingLabelText="Password"
            /><br />
             <TextField
                name={'password2'}
                onChange={handleNewUser}
            fullWidth={true}
            hintText="**********"
            type={'password'}
            floatingLabelFixed={true}
            floatingLabelText="Password2"
            /><br />
        <RaisedButton 
                type={'submit'}
                label="Sign In" 
                fullWidth={true} 
                primary={true}/>
        </form>
        <span>Already Registered=?...</span>
        <Link to="/signin">
            <FlatButton label="Log In" fullWidth={true} />
        </Link>
        
    </div>
);