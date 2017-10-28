"user strict";

import React from 'react';

class EventTop extends React.Component {
	render() {
		return (
			<div className="event-top">
				<div className="composer">{this.props.composer}</div>
				<div className="title">{this.props.title}</div>
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
		return (<div className="cast">CAST</div>);
	}
}

module.exports = { EventTop, EventDate, EventBottom };