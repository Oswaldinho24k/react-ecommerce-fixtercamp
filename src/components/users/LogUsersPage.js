import React, {Component} from 'react';
import {LoginForm} from './LoginForm'
import {RegisterForm} from './RegisterForm'


class LogUsersPage extends Component{



    render(){
        let path = this.props.location.pathname;
        return(
            <div>
                {path==='/signin'?<LoginForm/>:<RegisterForm/>}
            </div>
        )
    }
}
export default LogUsersPage