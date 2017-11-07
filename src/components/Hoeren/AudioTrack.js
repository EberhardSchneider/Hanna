import React, { Component } from 'react';
import PlayButton from './PlayButton.js';
import AudioInfoBox from './AudioInfoBox.js';

class AudioTrack extends Component {
	render() {
		return (
					<div className={"audio-track" + (this.props.active ? " active" :"")}
								onClick={() => { this.props.clickHandler(this.props.index) }}>
						<div className="audio-komponist">{this.props.trackData.komponist}</div>
						<div className="audio-titel">{this.props.trackData.titel}</div>
						{this.props.active ? (<AudioInfoBox audioInfo={this.props.audioInfo}/>) : null }
					</div>
			);
	}
}

module.exports = AudioTrack;