import React, {Component } from 'react';
import VitaText from './Vita/vitatext.js';
import HannaScrollbars from './HannaScrollbars.js'

class Vita extends Component {
	render() {
		return (
		<HannaScrollbars style={{top: '20vh', left: '30vw', width: '60vw', height: '70vh' }}>
			<VitaText/>
		</HannaScrollbars>
); 
}
}

module.exports = Vita; 