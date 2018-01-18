import React from 'react';

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
