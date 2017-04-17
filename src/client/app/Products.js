import React from 'react';
import Product from './Product.jsx'

class Products extends React.Component {

	constructor (props) {
		super(props);
		// this.addCartItems1 = this.props.addCartItems1.bind(this);
	}

	getProducts (addToCart) {
      	var products =  this.props.products;

		return products.map(function (product, i) {
			return <Product key={i} product={product}  addCartItems={addToCart}/>;
		});
		
	}

	render () {
		return (
			<div className="products-container">
				<div className="products-alignment">					
					{this.getProducts(this.props.addCartItems)}
				</div>				
			</div>
		);
	}
}

export default Products;