import React, {Component} from 'react'
import { ProductsList } from './ProductsList';
import {TextField} from 'material-ui';
import {Filters} from './Filters'



class ProductsPage extends Component{

    state = {
        search:'',
        category:'',
        products:[
            {
                id:1,
                name:'dulce1',
                price:40,
                category:1,
                description:'blablabla',
                photo:'https://images.pexels.com/photos/51352/gummibarchen-color-candy-nibble-51352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                id:2,
                name:'dulce2',
                price:40,
                category:1,
                description:'blablabla',
                photo:'https://images.pexels.com/photos/51352/gummibarchen-color-candy-nibble-51352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                id:3,
                name:'dulce3',
                price:40,
                category:2,
                description:'blablabla',
                photo:'https://images.pexels.com/photos/51352/gummibarchen-color-candy-nibble-51352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                id:4,
                name:'dulce4',
                price:40,
                category:2,
                description:'blablabla',
                photo:'https://images.pexels.com/photos/51352/gummibarchen-color-candy-nibble-51352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
        ],
        categories:[
            {
                id:1,
                name:'picantes'
            },
            {
                id:2,
                name:'gomitas'
            }
        ],
    }

    handleSearch=(e)=>{
        this.setState({search:e.target.value})
    }
    handleCategory=(e, i, v)=>{
        
        this.setState({category:v})
        console.log(this.state.category)
    }
    render(){
        let {products, search, category, categories} = this.state;
        const regEx = new RegExp(search, 'i');
        let filteredProducts = products.filter(i=>{
            return regEx.test(i.name)
        })
        if(category){
            filteredProducts = filteredProducts.filter(p=>{
                return p.category === category
            })
        }
        return(
            <div className="products-page-container">
                <Filters 
                    categories={categories}
                    search={search}
                    category={category}
                    handleCategory={this.handleCategory}
                    handleSearch={this.handleSearch}/>
                <ProductsList 
                    products={filteredProducts}/>
            </div>
        );
    }
}

export default ProductsPage