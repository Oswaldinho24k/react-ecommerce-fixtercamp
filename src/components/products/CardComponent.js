import React from 'react'
import {Link} from 'react-router-dom'
import {Card, CardActions, CardMedia, CardTitle, CardText, FlatButton} from 'material-ui'


export const CardComponent =({id, photo, name, price, description}) =>(
   <Link to={`/products/${id}`}>
     <Card>
        <CardMedia
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
        <img src={photo} alt="" />
        </CardMedia>
        <CardTitle title={name} subtitle={name} />
        <CardText>
        {description}
        </CardText>
        <CardActions>
        <FlatButton label="Ver" />
        <FlatButton label="Add" />
        </CardActions>
  </Card>
   </Link>
);
