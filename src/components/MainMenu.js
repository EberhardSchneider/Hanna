"use strict";

import $ from 'jquery';
import React from 'react';
import TweenMax from 'gsap'


import { MenuElement } from './MainMenu/MenuElement';
import { MenuDecoration } from './MainMenu/MenuDecoration';
import { HomeButton } from './MainMenu/HomeButton';
import calculateFrames from './MainMenu/keyframes';
import { Motion, spring } from 'react-motion';


import Home from './home';
import Agenda from './Agenda/agenda';
import Vita from './Vita/vita';
import Hoeren from './Hoeren/hoeren';
import Sehen from './Sehen/sehen';
import Kontakt from './Kontakt/kontakt';

let frames = {};

const routes = {
	'home': {	path: '/',
		exact: true,
		name: 'HOME',
	},
	'agenda': {	path: '/agenda',
		name: 'AGENDA!!!!',
		component: <Agenda/>
	},
	'vita': {	path: '/vita',
		name: 'VITA',
		component: <Vita/>
	},
	'hoeren': {	path: '/hoeren',
		name: 'HÖREN',
		component: <Hoeren/>
	},
	'sehen': {	path: '/sehen',
		name: 'SEHEN',
		component: <Sehen/>
	},
	'kontakt': {	path: '/kontakt',
		name: 'KONTAKT',
		component: <Kontakt/>
	}
};



const menuElements = [
	{ name: 'AGENDA',
		link: '/agenda'},
	{ name: 'VITA',
		link: '/vita'},
	{ name: 'HÖREN',
		link: '/hoeren'},
	{ name: 'SEHEN',
		link: '/sehen'},
	{ name: 'KONTAKT',
		link: '/kontakt'}
]





class MainMenu extends React.Component {
	constructor(props) {

    	super(props);
      this.checkIfMobile = this.checkIfMobile.bind(this);
      this.addMobileProp = this.addMobileProp.bind(this);
      const self = this;
    	this.state = {currentPage: 'home'};

      window.onpopstate = function(event) {

      const page = event.state ? event.state.page : "home";

      self.changeCurrentPage( page );
    };
	}

	componentDidMount() {


    this.checkIfMobile();

		frames = calculateFrames(this.isMobile);
		this.animateMenuTo('home');


		this.addListeners();
		window.addEventListener('resize', this.handleResize.bind(this), true);
	}

	componentDidUpdate() {
		TweenMax.to( $('.content'),
										1.25,
										{ opacity: 1 }

									);
	}


	handleResize() {

    this.checkIfMobile();
		frames = calculateFrames(this.isMobile);

		this.animateMenuTo( this.state.currentPage );
	}


	render() {

    let content = routes[ this.state.currentPage ].component || <Home/>;

  return (

					<div className="wrapper">

						<div className="content">{this.addMobileProp(content)}</div>

						<HomeButton/>
						{menuElements.map(function(element) {
							return <MenuElement key={element.name}
																	link={element.link}
																	name={element.name}/>
						})}
						<MenuDecoration/>

					</div>

			);
	}

  addMobileProp( element ) {

		return React.cloneElement(element, { isMobile: this.isMobile });

  }


	animateMenuTo( page ) {
		const frame = frames[page];

		$('.menu-item').each( function(index) {  // all menu elements
			TweenMax.to( $(this),
										2,
										{
											transform: frame[index].translate,
											fontSize: frame[index].fontSize,
											ease: Back.easeInOut
										}
			);
		});
		$('.menu-item >  div').each(function(index) { // and the links in the elements
				TweenMax.to( $(this),
											2,
											{
												letterSpacing: frame[index].letterSpacing,
												autoRound: false,
												opacity: frame[index].opacity
											}
			);
		});

		if (page == 'home') {  // now the home button and the menu decoration elements

			TweenMax.to('.home-button',
									2,
									{
										opacity: 0
									});
			TweenMax.to( $('.menu-decoration'),
										2,
										{
											fontSize: '3.6vh',
											opacity: 1
										});
		} else {
			TweenMax.to( $('.menu-decoration'),
										2,
										{
											fontSize: 0,
											opacity: 0
										});
			TweenMax.to('.home-button',
									2,
									{
										opacity: 1
									});
		}
	}



	changeCurrentPage( page ) {
    if (page == this.state.currentPage)
      return;
		this.animateMenuTo( page );
    history.pushState( { page: page}, page, page );
		TweenMax.to( $('.content'),
									.75,
									{ opacity: 0,
										onComplete: () => { this._animationComplete(page) }
									}
								);
	}

	_animationComplete(page) {
		this.setState({ currentPage: page });
	}

	// Helper

  // add click listeners to menu items and home button
	addListeners() {
		const self = this;
			$('.menu-item>div').each( function() {
				let name = $(this).attr("link");
        name = (name == "") ? "/home" : name;
				$(this).click( function() {
					if (name !== self.state.currentPage) {
						self.changeCurrentPage( name.substring(1) );
					}
				})
			});
			$('.home-button').click( function() {
				self.changeCurrentPage('home');
			});
		}

    checkIfMobile() {
      const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
      this.isMobile = (width < 768) ;
    }

} // class



module.exports = {MainMenu};
