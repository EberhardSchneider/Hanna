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


	//Agenda frame
	frames['agenda'] = [];
	let spacing = computeSpacing( 350 );
	items.forEach( function( key, index ) {
		frames['agenda'][index] = {
			translate: 'translate(4vw, ' + (23+index*9) + 'vh)',
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

	// Sehen frame
	frames['sehen'] = [];
	items.forEach( function( key, index ) {
		frames['sehen'][index] = {
			translate: 'translate(4vw, ' + (23+index*9) + 'vh)',
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










// // TODO




// // VIEL ZU KOMPLIZIERT

// // OBJEKTGEFLECHT VON HAND SCHREIBEN !!!
// // EINFACH DAS OBJEKT IMPORTIEREN!!!!


// class Frames {

// 	constructor() {
// 	
// 	}

// 	update() {
// 		// home
// 		let homeFrame = {};
// 		this.items.key().forEach( function( key, index ) {
// 			homeFrame[index] = {
// 				translate: 'translate(40vw, ' + (21+index*9) + 'vh)',
// 				fontSize: '9vh',
// 				letterSpacing: 2
// 			};
// 		});
// 		// agenda
// 		let agendaFrame = {};
// 		spacing = this.computeSpacing( 250 );
// 		this.items.key().forEach( function( key, index ) {
// 			homeFrame[index] = {
// 				translate: 'translate(4vw, ' + (21+index*9) + 'vh)',
// 				fontSize: '8vh',
// 				letterSpacing: spacing[index] 
// 			};
// 		});
// 		homeFrame[0] = {
// 			fontSize: '10vh',
// 			letterSpacing: 2
// 		}
// 		this.frames = {
// 			'home': homeFrame,
// 			'agenda': agendaFrame
// 		}
// 	}

// 	get() {
// 		return this.frames;
// 	}

function computeSpacing( width ) {
	  let spacing = []; 
	  
	  var fontSize = document.defaultView.getComputedStyle($('.width-measurement')[0], null).getPropertyValue('width');
	  fontSize = parseFloat( fontSize, 10);
	  $('.menu-item').each(function(index) {
	    var length = $(this).text().length;
	    $('.width-measurement').text( $(this).text() );
	    var textLength = document.defaultView.getComputedStyle($('.width-measurement')[0], null).getPropertyValue('width');
	    textLength = parseFloat( textLength, 10);
	    spacing[index] = (width - textLength)/(length - 1);
	  });

	  return spacing;
}

// }