import React, {Component} from 'react'
import { ProductsList } from './ProductsList';
//import {TextField} from 'material-ui';
import {Filters} from './Filters'



class ProductsPage extends Component{

    state = {
        search:'',
        category:'',
        products:[],
        categories:[],
    }
    componentWillMount(){
        this.getProducts()
        this.getCategories()
    }

    getProducts=()=>{
        //const userToken = JSON.parse(localStorage.getItem('userRanchoToken'));
        let url = 'http://localhost:8000/products/';
        var request = new Request(url, {
            method: 'GET',
            //body: data,
            headers: new Headers({
                //'Authorization':'Token '+userToken,
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(r=>r.json())
            .then(data=>{
                console.log(data)
                this.setState({products:data})
            })
            .catch(e=>{
                console.log(e)
        })
    }
    getCategories=()=>{
        //const userToken = JSON.parse(localStorage.getItem('userRanchoToken'));
        let url = 'http://localhost:8000/categories/';
        var request = new Request(url, {
            method: 'GET',
            //body: data,
            headers: new Headers({
                //'Authorization':'Token '+userToken,
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(r=>r.json())
            .then(data=>{
                console.log(data)
                this.setState({categories:data})
            })
            .catch(e=>{
                console.log(e)
        })
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
        let {addItem, removeItem} = this.props
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
                    removeItem={removeItem}
                    addItem={addItem}
                    products={filteredProducts}/>
            </div>
        );
    }
}

export default ProductsPage