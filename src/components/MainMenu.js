"use strict";

import $ from 'jquery';
import React from 'react';
import TweenMax from 'gsap'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { MenuElement } from './MainMenu/MenuElement';
import { MenuDecoration } from './MainMenu/MenuDecoration';
import { HomeButton } from './MainMenu/HomeButton';
import calculateFrames from './MainMenu/keyframes'

import Home from './home';
import Agenda from './agenda';
import Vita from './vita';
import Hoeren from './hoeren';
import Sehen from './sehen';
import Kontakt from './kontakt';

let frames = {};



class MainMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = { currentPage: 'home' };
	}

	componentDidMount() {
		frames = calculateFrames();
		this.animateMenu();

		this.addListeners();

		const self = this;
		$(window).resize(self.animateMenu.bind(self));
	}

	componentDidUpdate() {
		this.animateMenu();
	}


	render() {

		return (
				<Router>
					<div>
						<MenuElement link="/agenda" name="AGENDA"/>
						<MenuElement link="/vita" name="VITA"/>
						<MenuElement link="/hoeren" name="HÖREN"/>
						<MenuElement link="/sehen" name="SEHEN"/>
						<MenuElement link="/kontakt" name="KONTAKT"/>

						<MenuDecoration/>
						<Link to="/"><HomeButton/></Link>
			
						{/* div off screen for length measuring of text elements */}
						<div className="width-measurement"></div>	

						<div className="content">
							<Route path="/" component={Home}/>
							<Route path="/agenda" component={Agenda}/>
							<Route path="/vita" component={Vita}/>
							<Route path="/hoeren" component={Hoeren}/>
							<Route path="/sehen" component={Sehen}/>
							<Route path="/kontakt" component={Kontakt}/>
						</div>
					</div>
				</Router>
			);
	}

	

	animateMenu() {
		let currentPage = this.state.currentPage;
		const frame = frames[currentPage];

		TweenMax.staggerTo(".menu-item", .6, {rotation: 360}, .2);
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
		if (currentPage == 'home') {
			TweenMax.to( $('.menu-decoration'),
										2,
										{
											fontSize: '3.6vh',
											opacity: 1
										})
		} else {
			TweenMax.to( $('.menu-decoration'),
										2,
										{
											fontSize: 0,
											opacity: 0
										})
		}
	}

	

	changeCurrentPage( page ) {
		this.setState( { currentPage: page });
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

