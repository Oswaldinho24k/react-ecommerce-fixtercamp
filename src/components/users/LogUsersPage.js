import React, {Component} from 'react';
import {LoginForm} from './LoginForm'
import {RegisterForm} from './RegisterForm'
import {Paper} from 'material-ui'



class LogUsersPage extends Component{

    render(){
        let path = this.props.location.pathname;
        return(
            <div className="log-users-container">
              <div className="overlay">
                <Paper zDepth={2} style={{width:'30%'}}>
                 {path==='/signin'?<LoginForm/>:<RegisterForm/>}
                </Paper>  
                </div>
            </div>
        )
    }
}
export default LogUsersPage