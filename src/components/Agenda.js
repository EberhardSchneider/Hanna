import React from 'react';
import Scrollbars from 'react-custom-scrollbars';
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
			
				<div className="agenda">
						
							
							<Scrollbars style={{height: '47vh', width: '70vw'}}
													renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
													renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}>
								<div className="scroll-container">
									<Event data={eventData}/>
									<Event data={eventData}/>
									<Event data={eventData}/>
									<Event data={eventData}/>
									<Event data={eventData}/>
									<Event data={eventData}/>
								</div>
								<div className="fadeOutArea"></div>
							</Scrollbars>
							
					
				</div>
			
			);
	}

}


module.exports = Agenda;