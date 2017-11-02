import React from 'react';
import Image from './Sehen/Image.js'
import $ from 'jquery';



class Sehen extends React.Component {
	constructor(props) {
		super(props);
		const self = this;
		$.ajax({ 
			url: "../hanna/dist/phpincludes/get_images.php",
			type: 'POST',
			dataType: 'json',

			success: function( data ) {
				let imageUrls = []; 
				imageUrls = data.filter( name => { return (name.slice(-7,-4) == "THB")});
				let images = [];
				imageUrls.forEach( function( obj, index) {
					images[index] = { id: index, url: "hanna/dist/" + gulp
					obj.slice(3) };
				});
				self.setState( { images } );
			}
		});
	}
	
	renderImage(id, url) {
		return <Image id={id} url={url}/>;
	}
	
	render() {
		console.log( this.state );
		let images;
		if (this.state && this.state.images) {
			images = this.state.images.map( function( image ) {
				return <Image key={image.id} id={image.id} url={image.url}/>
			});
		}
		else {
			images = <div>Loading Images...</div>;
		}
		return (<div className="scene-images-container">{images}</div>);
	}
	
}

module.exports = Sehen;