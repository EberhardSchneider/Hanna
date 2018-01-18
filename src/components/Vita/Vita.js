import React, {Component } from 'react';
import VitaText from './vitatext.js';
import HannaScrollbars from '../HannaScrollbarsVertical.js'

class Vita extends Component {
	render() {

    const style = this.props.isMobile ?
      {top: '41vh', left: '5vw', width: '85vw', height: '57vh' }
      : {top: '41vh', left: '33vw', width: '60vw', height: '57vh' };
		return (
		<div className="vita">
			<div className="vita-image"></div>
			<HannaScrollbars style={style}>
				<VitaText/>
			</HannaScrollbars>
		</div>
);
}
}

module.exports = Vita;
