import React, {Component} from 'react';
import {LoginForm} from './LoginForm'
import {RegisterForm} from './RegisterForm'
import {Paper} from 'material-ui'



class LogUsersPage extends Component{

    state={
        user:{},
        newUser:{}
    }
    componentWillMount(){

    }

    handleText=(e)=>{
        let {user} = this.state;
        let field = e.target.name;
        user[field] = e.target.value;
        this.setState({user})
    }
    handleNewUser=(e)=>{
        let {newUser} = this.state;
        let field = e.target.name;
        newUser[field] = e.target.value;
        this.setState({newUser})
    }


    
    signUp=(e)=>{
        e.preventDefault()
        //const userToken = JSON.parse(localStorage.getItem('userRanchoToken'));
        let url = 'http://localhost:8000/users/';
        var request = new Request(url, {
            method: 'POST',
            body: JSON.stringify(this.state.newUser),
            headers: new Headers({
                //'Authorization':'Token '+userToken,
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(r=>r.json())
            .then(data=>{
                console.log(data)
                this.props.history.push('/signin')
                
            })
            .catch(e=>{
                console.log(e)
        })
    }
    logInUser=(e)=>{
        e.preventDefault()
        this.props.logIn(this.state.user)
    }

    render(){
        let {user, newUser} = this.state;
        let {logIn} = this.props;
        let path = this.props.location.pathname;
        return(
            <div className="log-users-container">
              <div className="overlay">
                <Paper zDepth={2} style={{width:'30%'}}>
                 {path==='/signin'?
                    <LoginForm
                        {...user}
                        user={user}
                        handleText={this.handleText}
                        logIn={this.logInUser}/>
                    :
                    <RegisterForm
                        {...newUser}
                        signUp={this.signUp}
                        handleNewUser={this.handleNewUser}/>}
                </Paper>  
                </div>
            </div>
        )
    }
}
export default LogUsersPage