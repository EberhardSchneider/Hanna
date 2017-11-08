import React, { Component } from React;



class FadeInOut extends Component {

	renderChildren() {
		return React.Children.map( this.props.children,
			child => {
				return React.cloneElement(child, { onLoad: this.onLoadHandler.bind(this) });
		});
	
	render() {
			return <div className="fade-container">{this.renderChildren()}</div>;
	}
}

module.exports = FadeInOut;