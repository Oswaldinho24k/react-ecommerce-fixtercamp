import React from 'react'
import {List} from 'material-ui'
import {CartCard} from './CartCard';

export const CartList =({cart, addItem, removeItem})=>(
    <List>
        <div className="cart-list">
            {cart.items.length===0?'You should add some candy 🍭':''}
            {cart.items.map((i, key)=>(
                <CartCard {...i} key={key} addItem={addItem} removeItem={removeItem}/>
            ))}
        </div>
        <h2 style={{padding:'0 2%'}}>Total: ${cart.total}</h2>
    </List>  
)