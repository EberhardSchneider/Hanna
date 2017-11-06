"use strict";
import React, {Component} from 'react';

class Image extends Component {
	render() {
		return (
			<div className={this.props.type + '-div-'+this.props.id + " image"}
					 style={{backgroundImage: 'url('+this.props.url+')', backgroundSize: '140%'}}
					 onClick={() => this.props.handleClick(this.props.index)}/>
			);
	}
}

module.exports = Image;