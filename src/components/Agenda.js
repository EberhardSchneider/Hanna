import React from 'react';

import SpringScrollbars from './SpringScrollbars';

import Event from './Agenda/Event';
import normalizeWheel from'normalize-wheel';


class Agenda extends React.Component {

	componentDidMount() {
		this.maxWidth = this.refs.scrollbars.getScrollWidth() + 1000;
	}

	render() {
		console.log( this.
			props.location.pathname);
		let eventData = { 
				composer: 'Mozart',
				title: 'Zauberflöte',
				location: 'Zürich',
				date: '22-04-2017 22:00',
				cast: 'CAST'
		};


		return (

				<div className="agenda" onWheel={this.wheelHandler.bind(this)}>
						
							
							<SpringScrollbars style={{height: '47vh', width: '75vw'}}
													renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
													renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
												
													ref="scrollbars">

								<div className="scroll-container">
									<Event data={eventData}/>
									<Event data={eventData}/>
									<Event data={eventData}/>
									<Event data={eventData}/>
									<Event data={eventData}/>
									<Event data={eventData}/>
								</div>
								<div className="fadeOutArea"></div>

							</SpringScrollbars>
							
					
				</div>
			);
	}


		wheelHandler(e) {

			let scrollbars = this.refs.scrollbars;
			const normalized = normalizeWheel( e );
			console.log( normalized );
			let left = parseInt( scrollbars.getCurrentTarget() );
			let delta = parseInt( normalized.pixelY, 10 );
			let newLeft = left + delta ;
			scrollbars.scrollLeft( newLeft );


		}

}





module.exports = Agenda;