import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import Navbar from './components/navbar/Navbar';

class App extends Component {

  state={
    logged:false,
    user:{},
    cart:{
      items:[],
      total:0
    },
}

componentWillMount(){
    this.checkIfuser()
}

addItem=(product)=>{
  let {cart} = this.state
  let filtered = cart.items.filter(i=>{
    return i.product.id !== product.id
  })
  let repetido = cart.items.find(i => {
    return i.product.id === product.id
  });

  if(repetido !== undefined){
      repetido.quantity +=1;
      repetido.subtotal += parseFloat(repetido.product.price)
      filtered.push(repetido)
  }else{
    let item = {subtotal:parseFloat(product.price), product, quantity:1}
    filtered.push(item)
  }
  
  
  cart.items = filtered
  this.setState({cart})
  console.log(cart)
}

removeItem=(product)=>{
  /*
    if(item.amount >1){
                item.amount-=1;
            }else {item.amount =1}

            return [ ...state.map( i => {
              if(i.product.id === action.item.product.id){
                  return item
              }
              return i
            })];
  */ 
  let {cart} = this.state

  let filtered = cart.items.filter(i=>{
    return i.product.id !== product.id
  })
  let repetido = cart.items.find(i => {
    return i.product.id === product.id
  });
  if(repetido.quantity>=2){
    repetido.quantity -=1;
    repetido.subtotal -= parseFloat(repetido.product.price)
    filtered.push(repetido)
  }
  
  cart.items = filtered
  this.setState({cart})
  console.log(cart)
}

checkIfuser=()=>{
    let userToken = JSON.parse(localStorage.getItem('userToken'));
    console.log(userToken)
    if (userToken) {
        this.setState({logged:true})
    }else{
        this.setState({logged:false})
    }
}

logIn=(user)=>{
  console.log(user)
 // e.preventDefault()
  //const userToken = JSON.parse(localStorage.getItem('userToken'));
  let url = 'http://localhost:8000/api-token-auth/';
  var request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: new Headers({
          //'Authorization':'Token '+userToken,
          'Content-Type': 'application/json'
      })
  });
  fetch(request)
      .then(r=>{
        if(!r.ok) {
          console.log(r)
        }else{
          return r.json()
        }
      })
      .then(data=>{
          console.log(data)
          localStorage.setItem('userToken', JSON.stringify(data.token));
          //this.props.history.push('/profile')
          this.setState({logged:true})
      })
      .catch(e=>{
          console.log(e)
          this.setState({logged:false})
  })
}

logOut=()=>{
  localStorage.removeItem('userToken');
  this.setState({logged:false})
}
  render() {
    let {logged, cart} = this.state;
    return (
      <div>
        <Navbar 
          logOut={this.logOut}
          logged={logged}
          cart={cart}
          removeItem={this.removeItem}
          addItem={this.addItem}/>
        <div className="routes-container">
          <Routes
            removeItem={this.removeItem}
            addItem={this.addItem}
            logIn={this.logIn}
            logged={logged}/>
        </div>
      </div>
    );
  }
}

export default App;
