import React from 'react';


import HannaScrollbars from './HannaScrollbars';
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
							
							<HannaScrollbars style={{height: '47vh', 
																			 width: '75vw'}}>

								<div className="scroll-container">
									<Event data={eventData}/>
									<Event data={eventData}/>
									<Event data={eventData}/>
									<Event data={eventData}/>
									<Event data={eventData}/>
									<Event data={eventData}/>
								</div>
								<div className="fadeOutArea"></div>

							</HannaScrollbars>
							
					
				</div>
			);
	}

}





module.exports = Agenda;