import React from 'react';
import { Link } from 'react-router-dom'

class MenuElement extends React.Component {
	
	render() {
		let link = this.props.link, name = this.props.name;
		return (
			<div onDragStart={()=>(false)} 
					 onDrop={()=>(false)} 
					 className="menu-item">
				<Link to={link}>
					{name}
				</Link>
			</div>
		);
	}
};

module.exports = { MenuElement };