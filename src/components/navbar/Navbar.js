import React from 'react';
import {AppBar, IconButton, IconMenu, MenuItem, FlatButton} from 'material-ui'
import {Link} from 'react-router-dom';
import HomeIcon from 'material-ui/svg-icons/action/home';
import ProductsIcon from 'material-ui/svg-icons/maps/store-mall-directory';
import CartIcon from 'material-ui/svg-icons/action/shopping-cart';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { Cart } from './Cart';
import { spacing } from 'material-ui/styles';


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
        logged:true,
        open:false,
        products:[]
    }
    handleCart = () => {
        this.setState({open:!this.state.open})
    }

    render(){
        let {logged, open, products} = this.state;
        return(
            <div>
                <AppBar
                    iconElementRight={
                        <span>
                             <IconButton onClick={this.handleCart}>
                                <CartIcon/>
                            </IconButton>
                            {logged ? <Logged /> : <Login />}
                        </span>
                    }
                    iconElementLeft={
                    <span>
                        <Link to="/">
                            <IconButton>
                                <HomeIcon/>
                            </IconButton>
                        </Link>
                        <Link to="/products">
                            <IconButton>
                                <ProductsIcon/>
                            </IconButton>
                        </Link>
                    </span>    
                    }
                    />
                <Cart open={open}
                    handleCart={this.handleCart}
                    products={products}/>
            </div>
        );
    }
}

export default Navbar;