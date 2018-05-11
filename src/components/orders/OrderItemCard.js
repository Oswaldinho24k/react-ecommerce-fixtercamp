import React from 'react';
import {Avatar} from 'material-ui'

export const OrderItemCard =({id, quantity, subtotal, product})=>(
    <div>
        <span className="cart-card-container">
        <Avatar size={100} src={`http://localhost:8000${product.photo}`} />
            
            <span>#{quantity}</span>
            
            <span>${quantity*product.price}</span>

        </span>
    </div>
)