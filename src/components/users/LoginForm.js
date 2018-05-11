import React from 'react';
import {TextField, RaisedButton, FlatButton} from 'material-ui';
import {Link} from 'react-router-dom';


export const LoginForm = ({email, password, logIn, handleText, user}) => (
    <div className="log-form">
        <h2>LogIn</h2>
        <form action="" onSubmit={logIn}>
        <TextField
            onChange={handleText}
            name={'username'}
            hintText="usuario@company.com"
            floatingLabelFixed={true}
            floatingLabelText="Email"
            fullWidth={true}
            
            /><br />
        <TextField
            onChange={handleText}
            name={'password'}
            fullWidth={true}
            hintText="**********"
            type={'password'}
            floatingLabelFixed={true}
            floatingLabelText="Password"
            /><br />
        <RaisedButton 
                type={'submit'}
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