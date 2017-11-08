import React from 'react';
import $ from 'jquery';

import HannaScrollbars from './HannaScrollbarsHorizontal';
import Event from './Agenda/Event';



class Agenda extends React.Component {

	constructor( props ) {
		super(props);
		this.state = { eventData: [] };
	
		// get events data
		$.ajax({

			url: "/testsite/phpincludes/db_events.php",
			type: 'POST',

			dataType: 'json',
			context: this,
			success: function(data) {
				const events = Object.values(data);
				this.setState( { eventData: events });
			}
		}); // ajax call

	}


	componentDidUpdate() {
		$('<div class="event width-event" style="position: absolute; top: -9999"/>').appendTo( $('body' ));
		const eventWidth = $('.event').outerWidth( true );
		$('.width-event').remove();
		console.log("EventWidth: " + eventWidth );
		const numberOfEvents = this.state.eventData.length;
		const timelineLength = numberOfEvents * eventWidth + 10;
	
		$('.scroll-container').css("width", timelineLength+"px");
	}

	render() {



		return (

				<div className="agenda">
							
							<HannaScrollbars style={{height: '66vh', 
																			 width: '75vw'}}
																autoHide={true}>

								<div className="scroll-container">
									{this.state.eventData.map( function( event ) {
										return <Event key={event.id} data={event}/>
									}, this)}
								</div>
								<div className="fadeOutArea"></div>

							</HannaScrollbars>
							
					
				</div>
			);
	}

}





module.exports = Agenda;