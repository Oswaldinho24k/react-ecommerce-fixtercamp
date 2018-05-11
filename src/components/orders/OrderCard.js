import React from 'react';
import {Card, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui';
import moment from 'moment';
import { OrderItemCard } from './OrderItemCard';

export const OrderCard = ({expanded, handleExpandChange, id, total, date, items, paid}) => (
    <Card expanded={expanded} onExpandChange={handleExpandChange}>
    <CardHeader
      title={`Orden de ${moment(date).format('LL')}---status: ${paid?'Pagada':'No pagada'}`}
      subtitle={`Total:${total}`}
      
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      {items.map((i, key)=>(
        <OrderItemCard key={key} {...i}/>
      ))}
    </CardText>

  </Card>
);