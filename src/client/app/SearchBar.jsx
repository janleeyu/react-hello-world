import React from 'react'

class SearchBar extends React.Component {

	render () {
		return (
			<div className="search-bar-container"><input type="text" /><button>Search</button></div>
		);
	}
}

export default SearchBar;