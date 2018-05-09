import React from 'react';
import { ListItem, Avatar, FloatingActionButton } from 'material-ui';
import Add from 'material-ui/svg-icons/content/add'
import Minus from 'material-ui/svg-icons/content/remove'

export const CartCard = ({product, subtotal,quantity, addItem, removeItem}) => (
    <ListItem
    value={3}
    disabled
    children={[
        <span className="cart-card-container">
        <Avatar size={100} src={product.photo} />
            <FloatingActionButton primary={true} mini={true} onClick={()=>addItem(product)}>
                <Add/>
            </FloatingActionButton>
            <span>#{quantity}</span>
            <FloatingActionButton secondary={true} mini={true} onClick={()=>removeItem(product)}>
                <Minus/>
            </FloatingActionButton>
            <span>${subtotal}</span>

        </span>
    ]}
    /> 

);