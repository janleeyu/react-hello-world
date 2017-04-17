import React from 'react'
import HeaderNav from './HeaderNav.jsx'
import SearchBar from './SearchBar.jsx'

class HeaderComponent extends React.Component {
	render () {
		return (
			<div className="header-container">
					<h2>Cart2x App</h2>
					<SearchBar />
				<HeaderNav />
			</div>
		)
	}
}

export default HeaderComponent;
