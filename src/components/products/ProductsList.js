import React from 'react'
import { GridList, GridTile } from 'material-ui';
import { CardComponent } from './CardComponent';

export const ProductsList = ({products, addItem, removeItem}) => (
    <GridList cols={3} cellHeight={"auto"}>
       {products.map((p, key)=>(
        <GridTile cols={1} key={key} style={{padding:'2%'}}>
            <CardComponent {...p} removeItem={removeItem} addItem={addItem} product={p}/>
        </GridTile>
       ))}
        
    </GridList>
);