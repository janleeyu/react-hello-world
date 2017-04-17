import React from 'react'

class AddProductModal extends React.Component {

	constructor (props) {
		super(props);
		
		this.state = {
			newProd : {
				id : '',
				productName : '',
				price : 0,
				quantity : 0,
				desc : ''
			},
			error : {
				name : false,
				price : false
			}
		};

		this.handleNameOnChange = this.handleNameOnChange.bind(this);
		this.handleQuantityOnChange = this.handleQuantityOnChange.bind(this);
		this.handlePriceOnChange = this.handlePriceOnChange.bind(this);
		this.handleDescOnChange = this.handleDescOnChange.bind(this);
		this.handleAddClick = this.handleAddClick.bind(this);
		this.resetNewProductData = this.resetNewProductData.bind(this);
		this.validateNewProData = this.validateNewProData.bind(this);
	}

	handleNameOnChange (e) {
		var newNewProd = this.state.newProd;
		var newVal = e.target.value
		newNewProd.productName = newVal.trim();
		this.setState({newProd : newNewProd});
	}

	handleQuantityOnChange (e) {
		// console.log('rtest : ' , e.target.value);
		var newVal = e.target.value;
		const re = /^[0-9]*$/;
		if (re.test(newVal)) {
			var newNewProd = this.state.newProd;
			newNewProd.quantity = Number(newVal.replace(/^[0]/, ''));
			this.setState({newProd : newNewProd});
		}
	}

	handlePriceOnChange (e) {
		var newVal = e.target.value;
		if (newVal == '' || newVal == 0 || Number(newVal)) {
			var newNewProd = this.state.newProd;
			newNewProd.price = Number(newVal.replace(/^[0]/, ''));
			this.setState({newProd : newNewProd});
		}
	}

	handleDescOnChange (e) {
		var newVal = e.target.value;
		var newNewProd = this.state.newProd;
		newNewProd.desc = newVal;
		this.setState({newProd : newNewProd});
	}

	validateNewProData () {
		console.log('validating');
		var newProd = this.state.newProd;
		var newErrState = this.state.error;
		var hasError = false;
		if (newProd.productName == '') {
			newErrState.name = true;
			hasError = true;
		}

		if (newProd.price == 0) {
			hasError = true;
			newErrState.price = true;
		}

		if (hasError) {
			this.setState({ error : newErrState });	
			return false;
		}

		return true;
	}

	handleAddClick (e) {
		if (this.validateNewProData()) {
			this.props.addNewProduct(this.state.newProd);
			this.resetNewProductData();
			$('#addProductModal').modal('hide');
		} else {
			// $('#addProductModal').modal('hide');
		}
	}

	resetNewProductData () {
		var noData = {
			name : '',
			price : 0,
			quantity : 0,
			desc : ''
		}

		this.setState({ newProd : noData });
		// $('#cartModal').modal('hide');
	}

	test () {
		return false;
	}
	render () {
		return (
			<div className="ui modal" id="addProductModal">
				<i className="close icon"></i>
			  	<div className="header">
			    	New Product
			  	</div>
			  	<div className="actions">

			  		<form className="form ui">
			  			<div className={'field' + (this.state.error.name ? ' error' : '')}>
			  				<label> 
			  					Product Name
			  				</label>
			  				<input type="text" name="first-name" placeholder="Product Name" defaultValue={this.state.newProd.name} onChange={this.handleNameOnChange}/>
			  			</div>
			  			<div className="fields">
				  			<div className={'field' + (this.state.error.price ? ' error' : '')}>
					  			<label> 
					  				Price
					  			</label>
					  			<input type="text" name="first-name" placeholder="Price" value={this.state.newProd.price} onChange={this.handlePriceOnChange} />
					  		</div>
					  		<div className="field">
					  			<label> 
					  				Initial Quantity
					  			</label>
					  			<input type="text" name="first-name" placeholder="Initial Quantity" value={this.state.newProd.quantity} onChange={	this.handleQuantityOnChange }/>
					  		</div>
			  			</div>	
			  			<div className="field">
			  				<label>
			  					Short Description
			  				</label>
			  				<textarea rows="2" defaultValue={this.state.newProd.desc} onChange={this.handleDescOnChange}>

			  				</textarea>
			  			</div>		
			  			<div className="ui positive animated fade button" tabIndex="0" onClick={this.handleAddClick}>
						  	<div className="visible content">Checkout</div>
						  	<div className="hidden content">
						    	test1
						  	</div>
						</div>	
						<div className="ui approve button" onClick={this.test}>Approve</div>	
						<div className="ui button" onClick={this.handleAddClick}>Neutral</div>		  			
			  		</form>			  		
			  	</div>
			</div>
		);
	}
}

export default AddProductModal;