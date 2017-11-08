"user strict";

import React from 'react';
import $ from 'jquery';

class EventTop extends React.Component {
	render() {
		return (
			<div className="event-top">
				<div className="composer" 
							dangerouslySetInnerHTML={{__html:this.props.composer}}/>
				<div className="title"
							dangerouslySetInnerHTML={{__html:this.props.title}}/>
				<div className="location">{this.props.location}</div>
			</div>
			);
	}
}

class EventDate extends React.Component {
	render() {
		return (
			<div className="event-date">
				<div className="date">EventData</div>
			</div>

			);
	}
}

class EventBottom extends React.Component {
	render() {
		const cast = $.parseJSON( this.props.cast );
		const keys = Object.keys( cast );

		return (
			<div className="event-bottom">
			<div className="cast">
				{keys.map(function(key, index) {
					const rolle = key;
					const darsteller = cast[ key ];
					if (rolle.substring(0, 1) == "-" ) {
						return <div className="one-line" key={index}>{darsteller}</div>
					} else {
							return <div className="row" key={index}>
										<span className="role">{rolle}</span>
										<span className="performer">{darsteller}</span>
									</div>
					}
			}, this)}
				</div>
				</div>
			);
	}
}


module.exports = { EventTop, EventDate, EventBottom };