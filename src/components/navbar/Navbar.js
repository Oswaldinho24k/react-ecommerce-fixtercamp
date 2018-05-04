import React from 'react';
import {AppBar, IconButton, IconMenu, MenuItem, FlatButton} from 'material-ui'
import {Link} from 'react-router-dom';
import HomeIcon from 'material-ui/svg-icons/action/home';
import CartIcon from 'material-ui/svg-icons/action/shopping-cart';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'


const Logged = ({}) => (
    <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <Link to="/profile">
    <MenuItem primaryText="Profile" />
    </Link>
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

const Login = ({}) => (
    <Link to="/signin">
        <FlatButton label="Login" />
    </Link>
);

class Navbar extends React.Component{

    state={
        logged:true
    }

    render(){
        return(
            <div>
                <AppBar
                    iconElementRight={this.state.logged ? <Logged /> : <Login />}
                    iconElementLeft={
                   <Link to="/">
                     <IconButton>
                        <HomeIcon/>
                    </IconButton>
                    </Link>}/>
            </div>
        );
    }
}

export default Navbar;