import React from 'react'
import { GridList, GridTile } from 'material-ui';
import { CardComponent } from './CardComponent';

export const ProductsList = ({products}) => (
    <GridList cols={3} cellHeight={"auto"}>
       {products.map((p, key)=>(
        <GridTile cols={1} key={key}>
            <CardComponent {...p}/>
        </GridTile>
       ))}
        
    </GridList>
);