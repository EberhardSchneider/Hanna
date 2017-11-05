"use strict";
import React, {Component} from 'react';

class Image extends Component {
	render() {
		return (
			<div className={this.props.type + '-div-'+this.props.id}>
				<img src={this.props.url} 
						 className="image"
						 onClick={() => this.props.handleClick(this.props.id)}/>
			</div>
			);
	}
}

module.exports = Image;