"use strict";
import React, { Component } from 'react';
import $ from 'jquery';
import Image from './Image.js';
import Lightbox from './Lightbox.js';


class Images extends Component {

	constructor( props ) {
		super(props);

		this.handleImageClick = this.handleImageClick.bind(this);
		this.handleExitIconClick = this.handleExitIconClick.bind(this);

		this.state = { images: {}}
		const imageType = this.props.imageType;
		// get image filenames from ajax request
		const self = this;
		$.ajax({ 
			url: "../dist/phpincludes/get_images.php",
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
		// Adjust image container width
			$('.' + this.props.imageType + '-images').
					css("width", 
						"" + ( Math.ceil(Object.keys( this.state.images ).length / this.props.rows ) * window.innerHeight * 0.24 ) );
	}

	handleImageClick( index ) {
		this.setState( { lightbox: true, index: index });
	}

	handleExitIconClick() {
		
		this.setState( {lightbox: false });
	}

	render() {
		let lightbox = null;
		if (this.state.lightbox) {
			lightbox = ( 
				<Lightbox images={this.state.images}
									index={this.state.index}/>
				);
		}

		const imageType = this.props.imageType;
		const self = this;
		const images = (Object.keys(this.state.images).length == 0 ?
			null :
			this.state.images.map( function(image) {
				return <Image key={image.id} 
											id={image.id} 
											url={image.url} 
											type={imageType}
											handleClick={self.handleImageClick}
											handleExitIconClick={self.handleExitIconClick}/>;
					})
			);
		
		
		return (
				<div className={this.props.imageType + "-images-container"}>

					<div className={this.props.imageType + "-images"}>{images}</div>

					{lightbox}

				</div>
			);
	}
}

module.exports = Images;