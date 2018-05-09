import React from 'react'
import {Link} from 'react-router-dom'
import {Card, CardActions, CardMedia, CardTitle, CardText, FlatButton, RaisedButton} from 'material-ui'


export const CardComponent =({id, photo, name, price, description}) =>(
   <Link to={`/products/${id}`}>
     <Card style={{padding:'0 2%'}}>
        <CardMedia
        overlay={<CardTitle title={name} subtitle={name}  />}
        >
            <img src={photo} alt="" />
        </CardMedia>
        <CardTitle subtitle={description}/>
        
        <CardActions>
            
            <RaisedButton fullWidth={true} primary={true} label="Add" children={[]}/>
        </CardActions>
  </Card>
   </Link>
);
