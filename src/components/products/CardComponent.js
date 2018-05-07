import React from 'react'
import {Card, CardActions, CardMedia, CardTitle, CardText, FlatButton} from 'material-ui'


export const CardComponent =({photo, name, price, description}) =>(
    <Card>
        <CardMedia
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
        <img src={photo} alt="" />
        </CardMedia>
        <CardTitle title={name} subtitle={price} />
        <CardText>
        {description}
        </CardText>
        <CardActions>
        <FlatButton label="Ver" />
        <FlatButton label="Add" />
        </CardActions>
  </Card>
);
