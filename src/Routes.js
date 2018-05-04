import React from 'react'
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import ProductsPage from './components/products/ProductsPage';
import LogUsersPage from './components/users/LogUsersPage';
import UserProfilePage from './components/users/UserProfilePage';


export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/> 
        <Route path="/products" component={ProductsPage}/>    
        <Route path="/signin" component={LogUsersPage}/>
        <Route path="/signup" component={LogUsersPage}/>
        <Route path="/profile" component={UserProfilePage}/>
    </Switch>
)