import React from 'react';
import { ListItem, Avatar, FloatingActionButton } from 'material-ui';
import Add from 'material-ui/svg-icons/content/add'
import Minus from 'material-ui/svg-icons/content/remove'

export const CartCard = ({photo, name, price, addOne, removeOne}) => (
    <ListItem
    value={3}
    disabled
    children={[
        <span className="cart-card-container">
        <Avatar src="{photo}" />
            <FloatingActionButton primary={true} mini={true}>
                <Add/>
            </FloatingActionButton>
            <span>#</span>
            <FloatingActionButton secondary={true} mini={true}>
                <Minus/>
            </FloatingActionButton>
            <span>$200</span>

        </span>
    ]}
    /> 

);