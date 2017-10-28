import React from 'react';

import Event from './Agenda/Event';

class Agenda extends React.Component {

	componentDidMount() {

	}


	render() {
		let eventData = { 
				composer: 'Mozart',
				title: 'Zauberflöte',
				location: 'Zürich',
				date: '22-04-2017 22:00',
				cast: 'CAST'
		};

		return (
			<div className="content">
				<div className="agenda">
					
						<Event data={eventData}/>
						<Event data={eventData}/>
						<Event data={eventData}/>
					
				</div>
			</div>
			);
	}
}

module.exports = Agenda;