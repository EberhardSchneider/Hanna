import React from 'react';

class HomeButton extends React.Component {
	render() {
		return (
			<div className="home-button">
				<img src="/icons_e/menu-icon.svg" alt="Home"/>
			</div>
		);
	}
}

module.exports = { HomeButton };