import React from 'react'
import { GridList, GridTile, RaisedButton, Paper } from 'material-ui';
import { CartCard } from '../navbar/CartCard';
import {Link} from 'react-router-dom';

class CheckoutPage extends React.Component{

    state={
        products:[]
    }

    render(){
        let {products} = this.state;
        return(
            <div className={'center-box'}>
                <Paper zDepth={2} style={{width:'100%'}}>
                    <GridList cols={3} cellHeight={'auto'}>
                        <GridTile cols={2} style={{padding:'0 5%', marginRight:'2%'}}>
                            <h2>Your Purchase</h2>
                            <div className="products-list">
                                {products.map((p, key)=>(
                                    <CartCard/>
                                ))}
                            </div>
                            <h4>Tota: $500</h4>
                        </GridTile> 
                        <GridTile cols={1} style={{padding:'0 5%'}}>
                            <h2>Your Data</h2>
                            <h3>Username</h3>
                            <h5>email</h5>
                            <h5>phone</h5>
                            <p>address</p>
                            <hr/>
                            <Link to="/payment">
                                <RaisedButton label="Go Pay" primary={true} fullWidth={true}/> 
                            </Link> 
                        </GridTile>                  
                    </GridList>
                </Paper>
            </div>
        );
    }
}

export default CheckoutPage