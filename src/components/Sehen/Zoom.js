import React, { Component } from 'react';
import $ from 'jquery';

class Zoom extends Component {

	componentDidUpdate() {
		$('.zoom').attr('style','transform: scale(.98,.98)');
		setTimeout( function() { $('.zoom').attr('style', 'transition: transform 1.5s ease-in-out; transform: scale(1,1) !important')
		}, 100 );
	}

	render() {
		return <div className="zoom">
							{this.props.children}
						</div>
	}
}

module.exports = Zoom;