import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import ProductsPage from './components/products/ProductsPage';
import LogUsersPage from './components/users/LogUsersPage';

import UserProfilePage from './components/users/UserProfilePage';
import ProductDetail from './components/products/ProductDetail';
import Payment from './components/payment/Payment';
import CheckoutPage from './components/payment/CheckoutPage';



class Routes extends React.Component{
    // userProfile=()=>(
    //     <UserProfilePage logged={this.props.logged}/>
    // )
    // logInUser=()=>(
    //     <LogUsersPage 
    //         logIn={this.props.logIn}/>
    // )
    render(){
        let {logged, logIn, addItem, removeItem} = this.props;
        return(
            <Switch>
                <Route exact path="/" component={HomePage}/> 
                <Route exact path="/products" render={props => (<ProductsPage removeItem={removeItem} addItem={addItem} {...props}/>)}/>
                <Route path="/products/:product_id" render={props =>(<ProductDetail addItem={addItem} {...props}/>)}/>        
                <Route path="/signin" render={props =>(logged?<Redirect to="/profile" />:<LogUsersPage {...props} logIn={logIn}/>)}/>
                <Route path="/signup" render={props =>(logged?<Redirect to="/profile" />:<LogUsersPage {...props}/>)}/>
                <Route path="/profile" render={()=>(logged?<UserProfilePage/>:<Redirect to="signin"/>)}/>
                <Route path="/checkout" component={CheckoutPage}/>
                <Route path="/payment" component={Payment}/>
            </Switch>
        )
    }
}
export default Routes