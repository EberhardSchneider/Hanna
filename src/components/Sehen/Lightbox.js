import React, { Component } from 'react';
import { LeftArrow, RightArrow, ExitIcon } from './LightboxIcons.js';

class Lightbox extends Component {
	constructor(props) {
		super(props);

		this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
		this.handleRightArrowClick = this.handleRightArrowClick.bind(this);

		this.state = { index: this.props.index };
	}

	render() {
		const image = this.props.images[this.state.index];
		return (
				<div className="lightbox">
					<LeftArrow handleClick={this.handleLeftArrowClick}/>
					<RightArrow handleClick={this.handleRightArrowClick}/>
					<ExitIcon handleClick={this.props.handleExitIconClick}/>
					<img src={image.url} className="lightbox-image"/>
				</div>
			);
	}
	
	handleLeftArrowClick() {
		console.log("LeftArrow");
	}

	handleRightArrowClick() {
		console.log("RightArrow");
	}

}

module.exports = Lightbox;