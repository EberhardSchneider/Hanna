// // calculates and stores the keyframes for the menu animation
"use strict";

import $ from 'jquery';

export default function calculateFrames() {
	let frames = {};
	let items = [ 'agenda', 'vita', 'hoeren', 'sehen', 'kontakt' ];

	// Home frame
	frames['home'] = [];
	items.forEach( function( key, index ) {
			frames['home'][index] = {
				translate: 'translate(40vw, ' + (23+index*9) + 'vh)',
				fontSize: '9vh',
				letterSpacing: 2,
				opacity: .1
			};
	});



	let spacing = computeSpacing( document.body.scrollWidth * 0.27 );
	
	//Agenda frame
	frames['agenda'] = [];
	items.forEach( function( key, index ) {
		frames['agenda'][index] = {
			translate: 'translate(2vw, ' + (23+index*9) + 'vh)',
			fontSize: '8vh',
			letterSpacing: spacing[index],
			opacity: .1
		};
	});
	frames['agenda'][0] = {  // AGENDA is bigger and further to the right
		translate: 'translate(14vw, 22vh)',
		fontSize: '9.5vh',
		letterSpacing: 2,
		opacity: 1
	};

	// vita frame
	frames['vita'] = [];
	items.forEach( function( key, index ) {
		frames['vita'][index] = {
			translate: 'translate(2vw, ' + (23+index*9) + 'vh)',
			fontSize: '8vh',
			letterSpacing: spacing[index],
			opacity: .1
		};
	});
	frames['vita'][1] = {
		translate: 'translate(24vw, ' + 5 + 'vh)',
		fontSize: '9.5vh',
		letterSpacing: 2,
		opacity: 1
	};

	// Sehen frame
	frames['sehen'] = [];
	items.forEach( function( key, index ) {
		frames['sehen'][index] = {
			translate: 'translate(2vw, ' + (23+index*9) + 'vh)',
			fontSize: '8vh',
			letterSpacing: spacing[index],
			opacity: .1
		};
	});
	frames['sehen'][3] = {
		translate: 'translate(24vw, ' + (23+3*9) + 'vh)',
		fontSize: '9.5vh',
		letterSpacing: 2,
		opacity: 1
	};



	

	return frames;
}



function computeSpacing( width ) {
	  let spacing = []; 
	  $('<div class="width-measurement"/>').appendTo( $('body') );
	  $('width-measurement')
	  .attr('style',
	  	'position: absolute; top: -9999; font-family: "Raleway", sans-serif; font-weight: extra-bold;	font-size: 8vh;');
	  
	  var fontSize = document.defaultView.getComputedStyle($('.width-measurement')[0], null).getPropertyValue('width');
	  fontSize = parseFloat( fontSize, 10);
	  $('.menu-item').each(function(index) {
	    var length = $(this).text().length;
	    $('.width-measurement').text( $(this).text() );
	    var textLength = document.defaultView.getComputedStyle($('.width-measurement')[0], null).getPropertyValue('width');
	    textLength = parseFloat( textLength, 10);
	    spacing[index] = (width - textLength)/(length - 1);
	  });
		$('.width-measurement').remove();
	  return spacing;
}

// }