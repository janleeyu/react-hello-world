import React from 'react'

class HeaderNav extends React.Component {
	render () {
		return (
			<div className="header-nav-container">
				<ul>
					<li key="nav-1">
						<a className="active-nav"> Home </a></li>
					<li key="nav-2">
						<a> About </a></li>
					<li key="nav-3">
						<a> Logout </a></li>	
				</ul>
			</div>
		);
	}
}

export default HeaderNav;