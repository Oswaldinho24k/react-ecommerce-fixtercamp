import React from 'react'
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import ProductsPage from './components/products/ProductsPage';
import LogUsersPage from './components/users/LogUsersPage';
import UserProfilePage from './components/users/UserProfilePage';
import ProductDetail from './components/products/ProductDetail';
import Payment from './components/payment/Payment';
import CheckoutPage from './components/payment/CheckoutPage';


export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/> 
        <Route exact path="/products" component={ProductsPage}/>
        <Route path="/products/:product_id" component={ProductDetail}/>        
        <Route path="/signin" component={LogUsersPage}/>
        <Route path="/signup" component={LogUsersPage}/>
        <Route path="/profile" component={UserProfilePage}/>
        <Route path="/checkout" component={CheckoutPage}/>
        <Route path="/payment" component={Payment}/>
    </Switch>
)