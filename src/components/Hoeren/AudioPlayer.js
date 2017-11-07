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

		this._timeUpdateHandler = null;

		this._handleButtonClick = this._handleButtonClick.bind(this);
		this._handleTrackClick = this._handleTrackClick.bind(this);
	}

	componentDidUpdate() {
		window.clearInterval( this._timeUpdateHandler );
		if (this.state.isAudioPlaying) {
			this._timeUpdateHandler = window.setInterval( this.timeUpdate.bind(this), 1000);
		}
	}

	componentWillUnmount() {
		this.audioElements[ this.state.activeTrack ].pause();
		this.setState({ isAudioPlaying: false });
	}


	render() {
		const self = this;
	
		return ( 	<div className="audio">
									<PlayButton handleClick={this._handleButtonClick}
															isAudioPlaying={this.state.isAudioPlaying}/>
									<div className="time-box"></div>
									{this.audioElements.map( function(elem, index) {
											return <AudioTrack 	key={index}
																					index={index}
																					trackData={elem}
																					audioInfo={self.props.audioData.audioDescriptions[index]}
																					active={self.state.activeTrack==index}
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
		$('.time-box').text("");


		let activeTrack = this.state.activeTrack;
		if (this.state.isAudioPlaying) {

			
	
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
		$('.time-box').text("");

		if (this.state.isAudioPlaying) {
			this.audioElements[ this.state.activeTrack ].pause();
		}
		this.setState( {activeTrack: index, isAudioPlaying: true});
		this.audioElements[ index ].play();
	}


	timeUpdate() {
		const audioPlaying = this.audioElements[ this.state.activeTrack ];
		let secondsComplete = Math.floor(audioPlaying.duration );
		const minutesComplete = Math.floor( secondsComplete / 60 );
		secondsComplete -= minutesComplete*60;
		
		let seconds = Math.floor( audioPlaying.currentTime );
		const minutes = Math.floor( seconds / 60 );
		seconds -= minutes*60;

		let secondsToGo = Math.floor( audioPlaying.duration - audioPlaying.currentTime );
		const minutesToGo = Math.floor( secondsToGo / 60 );
		secondsToGo -= minutesToGo*60;
		$(".time-box").text(this.formatTime( minutes, seconds) + "/" + this.formatTime( minutesComplete, secondsComplete) );
	}

	formatTime( minutes, seconds ) {

	   var string = "";
	   string += "" + minutes;
	   seconds = "" + seconds;
	   while ( seconds.length < 2) { seconds = "0" + seconds; }
	   string += ":" + seconds;
	   return string; 

	}


}

module.exports = AudioPlayer;