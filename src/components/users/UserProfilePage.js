import React, {Component} from 'react';
import {GridList, GridTile, List, ListItem} from 'material-ui';
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import OrdersList from '../orders/OrdersList';


class UserProfilePage extends Component{

    state={
        user:{
            username:'',
            orders:[],
            profile:{}
        }
    }

    componentWillMount(){
        this.getUser()
    }



    getUser=()=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        let url = 'http://localhost:8000/my_user/';
        var request = new Request(url, {
            method: 'GET',
            //body: data,
            headers: new Headers({
                'Authorization':'Token '+userToken,
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(r=>r.json())
            .then(data=>{
                console.log(data)
                this.setState({user:data})
            })
            .catch(e=>{
                console.log(e)
        })
    }

    render(){
        console.log(this.props)
        let {user} = this.state
        return(
            <GridList cols={4} cellHeight={"auto"} style={{padding:'1% 5%'}}>
                <GridTile cols={1}>
                <h2>Tu Perfil</h2>
                <List>
                    <ListItem primaryText={user.username} leftIcon={<ContentInbox />} />
                    <ListItem primaryText={user.email} leftIcon={<ContentInbox />} />
                    <ListItem primaryText={user.profile.phone} leftIcon={<ContentInbox />} />
                    <ListItem primaryText={user.profile.address} leftIcon={<ContentInbox />} />
                    </List>
                </GridTile>
                <GridTile cols={3}>
                    <h2>Tus Ordenes</h2>
                    <OrdersList orders={user.orders}/>
                    
                </GridTile>
            </GridList>
        );
    }
}

export default UserProfilePage;