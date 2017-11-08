import React, { Component } from 'react';
import $ from 'jquery';
import PlayButton from './PlayButton.js';
import AudioInfoBox from './AudioInfoBox.js';
import AudioTrack from './AudioTrack.js';


class AudioPlayer extends Component {

	constructor(props) {
		super(props);
		this._preloadAudio();
		this.state = { 	activeTrack: -1,
										isAudioPlaying: false };

		this._handleButtonClick = this._handleButtonClick.bind(this);
		this._handleTrackClick = this._handleTrackClick.bind(this);
	}



	componentWillUnmount() {
		if (this.state.isAudioPlaying) {
			this.audioElements[ this.state.activeTrack ].pause();
			this.setState({ isAudioPlaying: false });
		}
	}


	render() {
		const self = this;
	
		return ( 	<div className="audio">
									<PlayButton handleClick={this._handleButtonClick}
															isAudioPlaying={this.state.isAudioPlaying}/>
									{this.audioElements.map( function(elem, index) {
											return <AudioTrack 	key={index}
																					index={index}
																					trackData={elem}
																					audioInfo={self.props.audioData.audioDescriptions[index]}
																					active={self.state.activeTrack==index}
																					audioElement={self.audioElements[index]}
																					clickHandler={self._handleTrackClick} />

									})}
							</div>);
	}

	_preloadAudio() {
		const audioSources = this.props.audioData.audioSources; 
		this.audioElements = audioSources.map( function( audioData ) {
			let audioElement = new Audio();
			audioElement.src = audioData.src;
			audioElement.titel = audioData.titel;
			audioElement.komponist = audioData.komponist.toUpperCase();
			return audioElement;
		});
	}

	_handleButtonClick() {


		let activeTrack = this.state.activeTrack;
		if (this.state.isAudioPlaying) {
			this.audioElements[ activeTrack ].pause();
			this.setState({isAudioPlaying: false});
		} else {
			if (activeTrack == -1) {
				this.setState( { activeTrack: 0 });
				activeTrack = 0;
			}
			this.audioElements[ activeTrack ].play();
			this.setState({ isAudioPlaying: true });
		}
	}

	_handleTrackClick( index ) {

		if (this.state.isAudioPlaying) {
			this.audioElements[ this.state.activeTrack ].pause();
		}
		this.setState( {activeTrack: index, isAudioPlaying: true});
		this.audioElements[ index ].play();
	}


}

module.exports = AudioPlayer;