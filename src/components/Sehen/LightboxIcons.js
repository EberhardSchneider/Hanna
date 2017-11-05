import React, { Component } from 'react';

class LeftArrow extends Component {
	render() {
		return <img src="../icon/arrow-left.svg" 
								className="arrow-left"
								onClick={this.props.handleClick}/>;
	}
}

class RightArrow extends Component {
	render() {
		return <img src="../icon/arrow-right.svg" 
								className="arrow-right"
								onClick={this.props.handleClick}/>;
	}
}

class ExitIcon extends Component {
	render() {
		return <img src="../icon/close-icon.svg" 
								className="exit-icon"
								onClick={this.props.handleClick}/>;
	}
}

module.exports = { LeftArrow, RightArrow, ExitIcon };