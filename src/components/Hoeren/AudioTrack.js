import React, { Component } from 'react';
import $ from 'jquery'
import PlayButton from './PlayButton.js';
import AudioInfoBox from './AudioInfoBox.js';

class AudioTrack extends Component {

	constructor(props) {
		super(props);
		this.state = { currentTime: "" };
	}
	componentDidUpdate() {
		// check if component is currently running: handle time update
		if (this.props.active) {
			this.props.audioElement.ontimeupdate = this.updateTime.bind(this);
		}
	}

	render() {
		return (
					<div className={"audio-track" + (this.props.active ? " active" :"")}
								onClick={() => { this.props.clickHandler(this.props.index) }}>
						<div className="audio-komponist">{this.props.trackData.komponist}</div>
						<div className="audio-titel">{this.props.trackData.titel}</div>
						{this.props.active ? (<AudioInfoBox audioInfo={this.props.audioInfo} currentTime={this.state.currentTime}/>) : null }
					</div>
			);
	}

	updateTime() {
		const audioPlaying = this.props.audioElement;
		let secondsComplete = Math.floor(audioPlaying.duration );
		const minutesComplete = Math.floor( secondsComplete / 60 );
		secondsComplete -= minutesComplete*60;
		
		let seconds = Math.floor( audioPlaying.currentTime );
		const minutes = Math.floor( seconds / 60 );
		seconds -= minutes*60;

		let secondsToGo = Math.floor( audioPlaying.duration - audioPlaying.currentTime );
		const minutesToGo = Math.floor( secondsToGo / 60 );
		secondsToGo -= minutesToGo*60;
		const timeString = this.formatTime( minutes, seconds) + "/" + this.formatTime( minutesComplete, secondsComplete);
		this.setState( { currentTime: timeString });
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



module.exports = AudioTrack;