import React from 'react';

class CartModal extends React.Component {

	constructor (props) {
		super(props);
	}

	displayCartItems (items) {
		console.log(items);
		return items.map(function (item, i) {
			return (
				<tr key={i}>
					<td>
				  		{i + 1}
				  	</td>
				  	<td>
				  		{ item.productName }
				  	</td>
				  	<td>
				  		{ '$ ' + item.price.toFixed(2) }
				  	</td>
				  	<td>
				  		{ item.quantity }
				  	</td>
				  	<td>
				  		{ '$ ' + (item.quantity * item.price).toFixed(2) }
				  	</td>	
			  	</tr>		
			);
		});
	}

	getTotalPrice (items) {
		var totalPrice = items.map(function (item) {
			return (item.quantity * item.price);
		});

		console.log('the total price is :  ',  totalPrice[0]);

		return totalPrice.reduce(function (arg1, arg2) {
			return arg1 + arg2;
		}, 0);
	}

	render () {
		// console.log('active : ' + this.props.modalCartToggle);
		var checktOutBtn = (this.props.cartItems.length > 0) ? '' : ' disabled';
		// console.log('no. of items : ' + this.props.cartItems.length);
		return (
			<div className="ui modal" id="cartModal">
				<i className="close icon"></i>
			  	<div className="header">
			    	My Cart
			  	</div>
			  	<div className="actions">
			  		<table className="ui celled table">
			  			<thead>
			  				<tr>
			  					<th>
			  						#
			  					</th>
			  					<th>
			  						Product Name
			  					</th>
			  					<th>
			  						Price
			  					</th>
			  					<th>
			  						Quantity
			  					</th>
			  					<th>
			  						Total
			  					</th>
			  				</tr>
			  			</thead>	

			  			<tbody>
			  				{ this.displayCartItems(this.props.cartItems) }
			  			</tbody>
			  		</table>
			  		<div className={'ui positive animated fade button' + checktOutBtn} tabIndex="0">
					  	<div className="visible content">Checkout</div>
					  	<div className="hidden content">
					    	{(this.props.cartItems.length > 0) ? '$ ' + this.getTotalPrice (this.props.cartItems).toFixed(2) : '$ 0.00'}
					  	</div>
					</div>
			  	</div>
			</div>
		);
	}
}

export default CartModal;