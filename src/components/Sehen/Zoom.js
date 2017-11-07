import React, { Component } from 'react';
import $ from 'jquery';

class Zoom extends Component {

	constructor(props) {
		super(props);
		this._imageStyle = { transition: 'opacity 0s', opacity: 0};
	}

	renderChildren() {
		return React.Children.map( this.props.children,
			child => {
				return React.cloneElement(child, { onLoad: this.onLoadHandler.bind(this) });
			});
	}

	componentDidUpdate() {
		
	}
	
	onLoadHandler() {
		$('.zoom').attr('style','transition: opacity 0s, transform 0s; transform: scale(.98,.98); opacity: .6');
		setTimeout( () => { $('.zoom').attr('style','transition: opacity 1s, transform 1s ease-in-out; transform: scale(1,1); opacity: 1') }, 100 );
	}

	render() {
		return <div className="zoom" style={{transform: 'scale(..95,.95)'}}>
							{this.renderChildren()}
						</div>
	}
}

module.exports = Zoom;