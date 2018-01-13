import React from 'react';
import $ from 'jquery';

import HannaScrollbars from '../HannaScrollbarsHorizontal';
import Event from './Event';



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

	componentDidMount() {
		const fadeOutDiv = document.createElement('div');
		fadeOutDiv.className = "fadeOutArea";
		document.body.insertBefore( fadeOutDiv, document.getElementById('app') );
	}


	componentDidUpdate() {
		// calculate width of event containers
		$('<div class="event width-event" style="position: absolute; top: -9999"/>').appendTo( $('body' ));
		const eventWidth = $('.event').outerWidth( true );
		$('.width-event').remove();
		// calculate width of complete timeline
		const numberOfEvents = this.state.eventData.length;
		const timelineLength = numberOfEvents * eventWidth + 10;

		$('.scroll-container').css("width", timelineLength+"px");
	}

	componentWillUnmount() {
		document.getElementsByClassName('fadeOutArea')[0].remove();
	}

	render() {



		return (

				<div className="agenda">
							{/*<div className="fadeOutArea"></div>*/}
							<HannaScrollbars style={{height: '66vh',
																			 width: '80vw'}}
																autoHide={true}>

								<div className="scroll-container">
									{this.state.eventData.map( function( event ) {
										return <Event key={event.id} data={event}/>
									}, this)}
								</div>


							 </HannaScrollbars>


				</div>
			);
	}

}





module.exports = Agenda;
