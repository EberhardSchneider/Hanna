import React, { Component } from 'react';
import AudioPlayer from './Hoeren/AudioPlayer.js'
import {audioData} from './Hoeren/audioData.js'
class Hoeren extends Component {
	render() {
		return <div className="audio-player">
						<AudioPlayer audioData={audioData}/>
					</div>;
	}
}

module.exports = Hoeren;