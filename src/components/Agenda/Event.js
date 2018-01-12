import React from 'react'

import { EventTop, EventDate, EventBottom } from './EventComponents'

class Event extends React.Component {
	render() {
		
		return (
			<div className="event">
				<EventTop composer={this.props.data.komponist}
									title={this.props.data.title}
									location={this.props.data.ort}
				/> 
				<EventDate date={this.props.data.datum}/>
				<EventBottom cast={this.props.data.besetzung}
										 imageUrl={this.props.data.imageUrl}/>
			</div>
			);
	}
}

module.exports = Event;