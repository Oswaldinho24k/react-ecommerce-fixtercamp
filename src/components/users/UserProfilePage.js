import React, {Component} from 'react';
import {GridList, GridTile, List, ListItem} from 'material-ui';
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import OrdersList from '../orders/OrdersList';


class UserProfilePage extends Component{

    render(){
        console.log(this.props)
        return(
            <GridList cols={4} cellHeight={"auto"}>
                <GridTile cols={1}>
                <h2>Tu Perfil</h2>
                <List>
                    <ListItem primaryText="Username" leftIcon={<ContentInbox />} />
                    <ListItem primaryText="Email" leftIcon={<ContentInbox />} />
                    <ListItem primaryText="Phone" leftIcon={<ContentInbox />} />
                    <ListItem primaryText="Address" leftIcon={<ContentInbox />} />
                    </List>
                </GridTile>
                <GridTile cols={3}>
                    <h2>Tus Ordenes</h2>
                    <OrdersList/>
                    
                </GridTile>
            </GridList>
        );
    }
}

export default UserProfilePage;