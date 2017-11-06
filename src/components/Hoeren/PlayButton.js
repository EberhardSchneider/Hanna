import React, { Component } from 'react';


class PlayButton extends Component {
	constructor(props) {
		super(props);
		this.state = { status: 'play' };

		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		const button = this.state.status == 'play' ?
						<img src={'/hanna/icons_e/play-icon.svg'}
								 className={'audio-button'}/>
					: <img src={'/hanna/icons_e/pause-icon.svg'}
								 className={'audio-button'}/>;
		 return (<div className="audio-item" onClick={this.handleClick}>
		 			{button}
		 	</div>);
	}

	handleClick() {
		const newState = this.state.status == 'play' ?
											'pause' : 'play';
		this.setState( { status: newState } );
		this.props.handleClick();
	}
}

module.exports = PlayButton;