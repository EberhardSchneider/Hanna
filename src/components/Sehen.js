"use strict";
import React from 'react';
import Images from "./Sehen/Images.js";
import HannaScrollbars from './HannaScrollbars.js';
import $ from 'jquery';



class Sehen extends React.Component {

	render() {
		return (
		<HannaScrollbars style={{ width: '70vw', height: '90vh', left: '30vw', top: '4vh' }}>
			<div className="image-wrapper">
				<Images imageType='scene'/>
				<Images imageType='portrait'/>
			</div>
			<div className="fadeOutArea"></div>
		</HannaScrollbars>);
	}
	
}

module.exports = Sehen;