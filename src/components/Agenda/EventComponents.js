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
			<div className="date">{this.getDateString( this.props.date)}</div>
			</div>

			);
	}

	getDateString( dateStr ) {
		
		const a=dateStr.split(" ");
		const d=a[0].split("-");
		const t=a[1].split(":");
		const date = new Date(d[0],(d[1]-1),d[2],t[0],t[1],t[2]);
		// check here if event is upcoming
		if (date.getHours() == 0) {  // date and hour or just date
					var options = { year: 'numeric', month: 'long', day: 'numeric' };
				}
				else {
					var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
				}
		return date.toLocaleDateString("de-De", options).replace(":", "h");
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