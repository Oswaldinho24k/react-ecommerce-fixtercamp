import React from 'react';
import {Drawer, AppBar, IconButton, List, RaisedButton} from 'material-ui';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import { CartCard } from './CartCard';
import {Link} from 'react-router-dom';

export const Cart = ({open, handleCart, products}) => (
    <Drawer width={400} openSecondary={true} open={open}>
          <AppBar title="Cart"  
                iconElementLeft={
                    <IconButton onClick={handleCart}>
                        <CloseIcon/>
                    </IconButton>}
                  />
            
            <List>
                <div className="cart-list">
                    {products.length===0?'You should add some candy 🍭':''}
                    {products.map((p, key)=>(
                        <CartCard {...p} key={key}/>
                    ))}
                </div>
                <h2 style={{padding:'0 2%'}}>Total: $500</h2>
            </List>  
            <Link to="/checkout">
                <RaisedButton label="Checkout" primary={true} fullWidth={true}/> 
            </Link>    
            
    </Drawer>
);