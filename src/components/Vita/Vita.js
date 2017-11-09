import React, {Component } from 'react';
import VitaText from './vitatext.js';
import HannaScrollbars from '../HannaScrollbarsVertical.js'

class Vita extends Component {
	render() {
		return (
		<div className="vita">
			<div className="vita-image"></div>
			<HannaScrollbars style={{top: '41vh', left: '33vw', width: '60vw', height: '57vh' }}>
				<VitaText/>
			</HannaScrollbars>
		</div>
); 
}
}

module.exports = Vita; 