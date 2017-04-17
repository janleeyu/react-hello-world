import React from 'react'
import Products from './Products.js'

class ProductsBodyContainer extends React.Component {
	
	constructor (props) {
		super(props);
		// this.addCartItems = this.props.addCartItems.bind(this);
	}

	render () {
		// console.log(this.props.products);
		return (
			<div className="prod-body-container">
				<Products addCartItems={this.props.addCartItems} products={this.props.products}/>
			</div>
		);
	}
}

export default ProductsBodyContainer;