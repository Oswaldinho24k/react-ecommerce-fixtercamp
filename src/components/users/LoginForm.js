import React from 'react';
import {TextField, RaisedButton, FlatButton} from 'material-ui';
import {Link} from 'react-router-dom';


export const LoginForm = ({props}) => (
    <div className="log-form">
        <h2>LogIn</h2>
        <form action="">
        <TextField
            hintText="usuario@company.com"
            floatingLabelFixed={true}
            floatingLabelText="Email"
            fullWidth={true}
            type={'email'}
            /><br />
        <TextField
            fullWidth={true}
            hintText="**********"
            type={'password'}
            floatingLabelFixed={true}
            floatingLabelText="Password"
            /><br />
        <RaisedButton 
                label="Sign In" 
                fullWidth={true} 
                primary={true}/>
        </form>
        <span>Not registered, No problem...</span>
        <Link to="/signup">
            <FlatButton label="Register" fullWidth={true} />
        </Link>
        
    </div>
);