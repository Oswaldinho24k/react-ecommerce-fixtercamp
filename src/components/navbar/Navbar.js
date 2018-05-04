import React from 'react';
import {AppBar, IconButton} from 'material-ui'
import HomeIcon from 'material-ui/svg-icons/action/home';
import CartIcon from 'material-ui/svg-icons/action/shopping-cart';


class Navbar extends React.Component{
    render(){
        return(
            <div>
                <AppBar
                    iconElementRight={
                    <IconButton>
                        <CartIcon/>
                    </IconButton>}
                    iconElementLeft={
                    <IconButton>
                        <HomeIcon/>
                    </IconButton>}
                    title={
                       <span>Fixter E-Commerce</span>
                    }/>
                
            </div>
        );
    }
}

export default Navbar;