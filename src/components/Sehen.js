import React from 'react';
import Image from './Sehen/Image.js'

class Sehen extends React.Component {
	
	renderImage(id, url) {
		return <Image id={id} url={url}/>;
	}
	
	render() {
		let Iiages;
		if (this.state.images) {
			images = this.state.images.map( function( image ) {
				return <Image id={image.id} url={image.url}/>
			});
		}
		else {
			images = <div>Loading Images...</div>;
		}
		return (<div className="images">{images}</div>);
	}
	
}

module.exports = Sehen;