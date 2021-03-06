import React, { Component } from 'react';


class PlayButton extends Component {

	render() {
		 return (<div className="audio-item" onClick={this.props.handleClick}>
		 			{this.props.isAudioPlaying ?
					<img src={'/../../icons_e/pause-icon.svg'}
								 className={'audio-button'}/>
					: <img src={'/../../icons_e/play-icon.svg'}
								 className={'audio-button'}/>}
		 	</div>);
	}

}

module.exports = PlayButton;