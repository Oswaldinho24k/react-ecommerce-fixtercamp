import React, {Component} from 'react';
import { Card, RaisedButton } from 'material-ui';

class ProductDetail extends Component{
    render(){
        let product_id = this.props.match.params.product_id;
        console.log(this.props)
        return(
            <div className="detail-container">
                <Card>
                    <div className="card-product">
                        <img src="https://images.pexels.com/photos/51352/gummibarchen-color-candy-nibble-51352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                        <div>
                            <h1>
                            Detalle del producto con id {product_id}
                            </h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptas, atque maiores assumenda omnis, cumque nulla ipsa labore quaerat consequatur quisquam tempore ipsam dolore officiis, maxime tenetur voluptates vel perspiciatis.</p>
                            <h4>$500</h4>
                            <RaisedButton label="Add to Cart" primary fullWidth={true} />
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default ProductDetail