"use strict";
import React, { Component } from 'react';
import $ from 'jquery';
import Image from './Image.js';


class Images extends Component {

	constructor( props ) {
		super(props);
		this.state = { images: {}}
		const imageType = this.props.imageType;
		// get image filenames from ajax request
		const self = this;
		$.ajax({ 
			url: "../hanna/dist/phpincludes/get_images.php",
			type: 'POST',
			data: { directory: self.props.imageType },
			dataType: 'json',

			success: function( data ) {
				let imageUrls = []; 
				imageUrls = data.filter( name => { return (name.slice(-7,-4) == "THB")});
				let images = [];
				imageUrls.forEach( function( obj, index) {
					// CHANGE THIS LINE FOR PRODUCTION !!!!
					images[index] = { id: index, url: "hanna/dist/" + obj.slice(3) }; 
				});
				self.setState( { images } );
			}
		});
	}

	componentDidUpdate() {
		console.log("Adjusting container width...");
			$('.' + this.props.imageType + '-images').
					css("width", 
						"" + ( Math.floor(Object.keys( this.state.images ).length / 2 ) * window.innerHeight * 0.24 ) );
	}



	render() {
		const imageType = this.props.imageType;
		
		const images = (Object.keys(this.state.images).length == 0 ?
			null :
			this.state.images.map( function(image) {
				return <Image key={image.id} id={image.id} url={image.url} type={imageType}/>;
					})
			);
		
		
		return (
				<div className={this.props.imageType + "-images-container"}>

					<div className={this.props.imageType + "-images"}>{images}</div>

				</div>
			);
	}
}

module.exports = Images;