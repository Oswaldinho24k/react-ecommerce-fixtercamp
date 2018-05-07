import React, {Component} from 'react'
import { ProductsList } from './ProductsList';



class ProductsPage extends Component{

    state = {
        products:[
            {
                id:1,
                name:'dulce1',
                price:40,
                description:'blablabla',
                photo:'https://images.pexels.com/photos/922635/pexels-photo-922635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            {
                id:2,
                name:'dulce2',
                price:40,
                description:'blablabla',
                photo:'https://images.pexels.com/photos/922635/pexels-photo-922635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            {
                id:3,
                name:'dulce3',
                price:40,
                description:'blablabla',
                photo:'https://images.pexels.com/photos/922635/pexels-photo-922635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            {
                id:4,
                name:'dulce4',
                price:40,
                description:'blablabla',
                photo:'https://images.pexels.com/photos/922635/pexels-photo-922635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }
        ]
    }
    render(){
        let {products} = this.state;
        return(
            <div className="products-page-container">
                <ProductsList products={products}/>
            </div>
        );
    }
}

export default ProductsPage