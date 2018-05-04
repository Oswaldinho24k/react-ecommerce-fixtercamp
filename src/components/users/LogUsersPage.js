import React, {Component} from 'react';
import {LoginForm} from './LoginForm'
import {RegisterForm} from './RegisterForm'
import {Card} from 'material-ui'



class LogUsersPage extends Component{

    render(){
        let path = this.props.location.pathname;
        return(
            <div className="log-users-container">
              <div className="overlay">
                <Card style={{width:'30%'}}>
                {path==='/signin'?<LoginForm/>:<RegisterForm/>}
                </Card>  
                </div>
            </div>
        )
    }
}
export default LogUsersPage