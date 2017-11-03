"use strict";
import React, { Component } from 'react';
import Image from './Image.js';


class SceneImages extends Component {

	constructor( props ) {
		super(props);

		this.state.images = {};

		// get image filenames from ajax request
		const self = this;
		$.ajax({ 
			url: "../hanna/dist/phpincludes/get_images.php",
			type: 'POST',
			data: { directory: 'gallery'},
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

	render() {
		const numberOfImages = Object.keys( this.state.images ).length;
		const images = (numberOfImages == 0 ? <div className="loading">Images loading...</div>
																			 : this.state.images.map( function( image ) {
																			 		return <Image key={image.id} id={image.id} url={image.url}/>;
																			 }) );
		return (
				<div className="scene-images-container">{images}</div>
			);
	}
}