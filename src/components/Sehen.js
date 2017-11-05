"use strict";
import React from 'react';
import Images from "./Sehen/Images.js";
import HannaScrollbars from './HannaScrollbars.js';
import $ from 'jquery';



class Sehen extends React.Component {

	render() {
		return (
			<div className="sehen">
		<HannaScrollbars style={{ width: '66vw', 
															height: '90vh'}}>
			
			<div className="image-wrapper">
				<Images imageType='scene' rows={2}/>
				<Images imageType='portrait' rows={1}/>
			</div>
			
			<div className="fadeOutArea-2"></div>
		</HannaScrollbars>
		</div>);
	}
	
}

module.exports = Sehen;