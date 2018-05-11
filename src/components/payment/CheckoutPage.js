import React from 'react'
import { GridList, GridTile, RaisedButton, Paper } from 'material-ui';
import { CartCard } from '../navbar/CartCard';
import {Link} from 'react-router-dom';
import { CartList } from '../navbar/CartList';

class CheckoutPage extends React.Component{

    state={
        products:[],
        user:{
            profile:{}
        },
        
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

    createOrder=()=>{
        let order = {}
        let {cart} = this.props
        order['user'] = this.state.user.id
        order['total'] = this.props.cart.total
        order['items'] = []

        for (let i in cart.items){
            let item = {}
            item['product_id'] = cart.items[i].product.id
            item['quantity'] = cart.items[i].quantity
            order.items.push(item)
        }

        console.log(order)

        const userToken = JSON.parse(localStorage.getItem('userToken'));
        let url = 'http://localhost:8000/orders/';
        var request = new Request(url, {
            method: 'POST',
            body: JSON.stringify(order),
            headers: new Headers({
                'Authorization':'Token '+userToken,
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(r=>r.json())
            .then(data=>{
                console.log(data)
                this.props.history.push(`/payment/${data.id}`)
                
            })
            .catch(e=>{
                console.log(e)
        })
    }
    

    render(){
        let {products, user} = this.state;
        let {cart, addItem, removeItem} = this.props;

        return(
            <div className={'center-box'}>
                <Paper zDepth={2} style={{width:'100%'}}>
                    <GridList cols={3} cellHeight={'auto'}>
                        <GridTile cols={2} style={{padding:'0 5%', marginRight:'2%'}}>
                            <h2>Your Purchase</h2>
                            <div className="products-list">
                               <CartList cart={cart} removeItem={removeItem} addItem={addItem}/>
                            </div>
                            
                        </GridTile> 
                        <GridTile cols={1} style={{padding:'0 5%'}}>
                            <h2>Your Data</h2>
                            <h3>{user.username}</h3>
                            <h5>{user.email}</h5>
                            <h5>{user.profile.phone}</h5>
                            <p>{user.profile.address}</p>
                            <hr/>
                            <p>Total a pagar: ${cart.total}</p>
                            
                                <RaisedButton label="Go Pay" primary={true} fullWidth={true} onClick={this.createOrder}/> 
                            
                        </GridTile>                  
                    </GridList>
                </Paper>
            </div>
        );
    }
}

export default CheckoutPage