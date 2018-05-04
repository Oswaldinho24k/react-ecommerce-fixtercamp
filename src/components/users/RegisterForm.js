import React from 'react';
import {TextField, RaisedButton, FlatButton} from 'material-ui';
import {Link} from 'react-router-dom';


export const RegisterForm = ({props}) => (
    <div className="log-form">
        <h2>Register</h2>
        <form action="">
        <TextField
            hintText="usuario@company.com"
            floatingLabelFixed={true}
            floatingLabelText="Email"
            fullWidth={true}
            type={'email'}
            /><br />
            <TextField
            hintText="username"
            floatingLabelFixed={true}
            floatingLabelText="Username"
            fullWidth={true}
            
            /><br />
        <TextField
            fullWidth={true}
            hintText="**********"
            type={'password'}
            floatingLabelFixed={true}
            floatingLabelText="Password"
            /><br />
             <TextField
            fullWidth={true}
            hintText="**********"
            type={'password'}
            floatingLabelFixed={true}
            floatingLabelText="Password2"
            /><br />
        <RaisedButton 
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