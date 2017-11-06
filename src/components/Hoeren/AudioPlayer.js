import React, { Component } from 'react';
import PlayButton from './PlayButton.js';


class AudioPlayer extends Component {

	constructor(props) {
		super(props);
		this.preloadAudio();
		this.state = { 	activeTrack: 0 };

		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleTrackClick = this.handleTrackClick.bind(this);
	}

	componentDidMount() {
		
	}


	render() {
		const self = this;
		const tracks = this.audioElements.map( function(audioElement, index) {
			return ( 	<div className="audio-track" key={index} onClick={ () => { self.handleTrackClick(index) }}>
										<div className="audio-komponist">{audioElement.komponist}</div>
										<div className="audio-titel">{audioElement.titel}</div>
								</div>	);

		});
		return ( 	<div className="audio">
									<PlayButton handleClick={this.handleButtonClick}/>
									{tracks}
							</div>);
	}

	preloadAudio() {
		const audioSources = this.props.audioData.audioSources;
		this.audioElements = audioSources.map( function( audioData ) {
			let audioElement = new Audio();
			audioElement.src = audioData.src;
			audioElement.titel = audioData.titel;
			audioElement.komponist = audioData.komponist.toUpperCase();
			return audioElement;
		});
	}

	handleButtonClick() {
		console.log('PLAY/STOP');
	}

	handleTrackClick( track ) {
		console.log(track);
	}
}

module.exports = AudioPlayer;