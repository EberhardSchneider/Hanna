import React from 'react';
import { Link } from 'react-router-dom'

class MenuElement extends React.Component {

	render() {
		let link = this.props.link, name = this.props.name;
		return (
			<div className="menu-item">
				<div link={this.props.link}>
					{name}
				</div>
			</div>
		);
	}
};

module.exports = { MenuElement };
