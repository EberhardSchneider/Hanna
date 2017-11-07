import React, { Component } from 'react';
import $ from 'jquery'

class AudioInfoBox extends Component {


	render() {
		const audioInfo = this.props.audioInfo;
		return (
			<div className="audio-info-box">
				<div className="ort">{audioInfo.ort}</div>
				<div className="jahr">{audioInfo.jahr}</div>
				<div className="beschreibung">{audioInfo.beschreibung}</div>
				<div className="disclaimer">{audioInfo.disclaimer}</div>
			</div>
			);
	}
}

module.exports = AudioInfoBox;