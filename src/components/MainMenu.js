"use strict";

import $ from 'jquery';
import React from 'react';
import TweenMax from 'gsap'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'

import { MenuElement } from './MainMenu/MenuElement';
import { MenuDecoration } from './MainMenu/MenuDecoration';
import { HomeButton } from './MainMenu/HomeButton';
import calculateFrames from './MainMenu/keyframes';
import { Motion, spring } from 'react-motion';


import Home from './home';
import Agenda from './agenda';
import Vita from './vita';
import Hoeren from './hoeren';
import Sehen from './sehen';
import Kontakt from './kontakt';

let frames = {};

const routes = {
	'home': {	path: '/',
		exact: true,
		name: 'HOME',
	},
	'agenda': {	path: '/agenda',
		name: 'AGENDA',
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
		this.state = {currentPage: 'home'};
	}

	componentDidMount() {
		frames = calculateFrames();
		this.animateMenuTo('home');

		this.addListeners();

		const self = this;
		$(window).resize(self.handleResize.bind(self));

	}

	componentDidUpdate() {
		TweenMax.to( $('.content'), 
										1.25, 
										{ opacity: 1 }
										
									);
	}


	handleResize() {
		frames = calculateFrames();
		this.animateMenuTo( this.state.currentPage );
	}


	render() {
		let content = routes[ this.state.currentPage ].component || <Home/>;
		return (
				<Router>
					<div className="wrapper">
						{menuElements.map(function(element) {
							return <MenuElement key={element.name} 
																	link={element.link} 
																	name={element.name}/>
						})}
						<MenuDecoration/>
						<Link to="/"><HomeButton/></Link>
								<div className="content">{content}</div>
					</div>
				</Router>
			);
	}


	animateMenuTo( page ) {

		const frame = frames[page];
		TweenMax.staggerTo(".menu-item", .3, {rotation: 360}, .3);
		$('.menu-item').each( function(index) {
			TweenMax.to( $(this), 
										2, 
										{
											transform: frame[index].translate,
											fontSize: frame[index].fontSize,
											ease: Back.easeInOut
										}
			);
		});
		$('.menu-item > a').each(function(index) {
				TweenMax.to( $(this), 
											2, 
											{
												letterSpacing: frame[index].letterSpacing,
												autoRound: false,
												opacity: frame[index].opacity,
												ease: Back.easeInOut
											}
			);
		});
		if (page == 'home') {
			
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
		if (this.state.currentPage !== page) {
			this.animateMenuTo( page );
			TweenMax.to( $('.content'), 
										.75, 
										{ opacity: 0, 
											onComplete: () => { this._animationComplete(page) }
										}
									);
		}
	}

	_animationComplete(page) {
		this.setState({ currentPage: page });
	}

	// Helper/Modularizaton
	addListeners() {
		const self = this;
			$('.menu-item>a').each( function() {
				let name = $(this).attr("href");
				$(this).click( function() {
					self.changeCurrentPage( name.substring(1) );
				})
			});
			$('.home-button').click( function() {
				self.changeCurrentPage('home');
			});
		}

} // class



module.exports = {MainMenu};

