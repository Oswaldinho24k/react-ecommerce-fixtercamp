import React from 'react';
import {Card, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui';

export const OrderCard = ({expanded, handleExpandChange}) => (
    <Card expanded={expanded} onExpandChange={handleExpandChange}>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/ok-128.jpg"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText>
     
    </CardText>
    <CardMedia
      expandable={true}
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="https://images.pexels.com/photos/90919/pexels-photo-90919.png?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>

  </Card>
);