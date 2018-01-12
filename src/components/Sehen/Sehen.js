"use strict";
import React from 'react';
import Images from "./Images.js";
import HannaScrollbars from '../HannaScrollbarsHorizontal.js';
import $ from 'jquery';



class Sehen extends React.Component {

	render() {
		return (
			<div className="sehen">
			<div className="fadeOutArea-2"></div>
		<HannaScrollbars style={{ width: '66vw', 
															height: '90vh'}}
											autoHide={true}>
			
			<div className="image-wrapper">
				<Images imageType='scene' rows={2}/>
				<Images imageType='portrait' rows={1}/>
			</div>
			
			
		</HannaScrollbars>
		</div>);
	}
	
}

module.exports = Sehen;