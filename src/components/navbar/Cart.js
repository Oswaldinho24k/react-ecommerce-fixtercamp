import React from 'react';
import {Drawer, AppBar, IconButton, List, RaisedButton} from 'material-ui';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import { CartCard } from './CartCard';
import {Link} from 'react-router-dom';
import { CartList } from './CartList';

export const Cart = ({open, handleCart, products, cart, removeItem, addItem}) => (
    <Drawer width={400} openSecondary={true} open={open}>
          <AppBar title="Cart"  
                iconElementLeft={
                    <IconButton onClick={handleCart}>
                        <CloseIcon/>
                    </IconButton>}
                  />
            
            <CartList cart={cart} addItem={addItem} removeItem={removeItem}/>  
            <Link to="/checkout">
                <RaisedButton label="Checkout" primary={true} fullWidth={true}/> 
            </Link>    
            
    </Drawer>
);