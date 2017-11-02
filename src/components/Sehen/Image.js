import React, {Component} from 'react';

class Image extends Component {
	render() {
		return (<img src={this.props.url} className="image"/>);
	}
}

module.exports = Image;