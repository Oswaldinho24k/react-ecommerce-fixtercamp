import React from 'react';
import {Drawer, AppBar, IconButton, List, RaisedButton} from 'material-ui';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import { CartCard } from './CartCard';
import {Link} from 'react-router-dom';

export const Cart = ({open, handleCart, products, cart, removeItem, addItem}) => (
    <Drawer width={400} openSecondary={true} open={open}>
          <AppBar title="Cart"  
                iconElementLeft={
                    <IconButton onClick={handleCart}>
                        <CloseIcon/>
                    </IconButton>}
                  />
            
            <List>
                <div className="cart-list">
                    {cart.items.length===0?'You should add some candy 🍭':''}
                    {cart.items.map((i, key)=>(
                        <CartCard {...i} key={key} addItem={addItem} removeItem={removeItem}/>
                    ))}
                </div>
                <h2 style={{padding:'0 2%'}}>Total: ${cart.total}</h2>
            </List>  
            <Link to="/checkout">
                <RaisedButton label="Checkout" primary={true} fullWidth={true}/> 
            </Link>    
            
    </Drawer>
);