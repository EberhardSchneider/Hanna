import React from 'react'

import { EventTop, EventDate, EventBottom } from './EventComponents'

class Event extends React.Component {
	render() {
		return (
			<div className="event">
				<EventTop composer={this.props.data.composer}
									title={this.props.data.title}
									location={this.props.data.location}
				/> 
				<EventDate date={this.props.data.date}/>
				<EventBottom cast={this.props.data.cast}
										 imageUrl={this.props.data.imageUrl}/>
			</div>
			);
	}
}

module.exports = Event;