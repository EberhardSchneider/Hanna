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


		// get image filenames from ajax request
		const imageType = this.props.imageType;
		const self = this;
		$.ajax({ 
			url: "/testsite/phpincludes/db_get_" + imageType + "_images.php",
			type: 'POST',
			data: { directory: self.props.imageType },
			dataType: 'json',

			success: function( data ) {
				let images = [];
				images = Object.values( data );
				self.setState( { images } );
			}
		});
	
	}

	componentDidUpdate() {
		// Adjust image container width
		let containerWidth =  
			Math.ceil(Object.keys( this.state.images ).length / this.props.rows )  
					* window.innerHeight * 0.24;
		containerWidth += 0.075 * window.innerWidth;
			$('.' + this.props.imageType + '-images').
					css("width", "" + containerWidth);
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
									index={this.state.index}
									handleExitIconClick={this.handleExitIconClick}/>
				);
		}

		const imageType = this.props.imageType;
		const self = this;
		let index = 0;
		const images = (Object.keys(this.state.images).length == 0 ?
			null :
			this.state.images.map( function(image) {

				return <Image key={image.ID} 
											id={image.ID} 
											url={"/images/" + image.thumb}
											type={imageType}
											index={index++}
											subtitle={image.comment}
											handleClick={self.handleImageClick}/>;
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