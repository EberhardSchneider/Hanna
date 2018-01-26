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
        });

    }

    componentDidMount() {

        const fadeOutDiv = document.createElement('div');
        fadeOutDiv.className = "fadeOutArea";
        document.body.insertBefore( fadeOutDiv, document.getElementById('app') );



    }


    componentDidUpdate() {

        // calculate width of event containers
        $('<div class="event width-event" style="position: absolute; top: -9999"/>')
      .appendTo( $('body' ));
        const eventWidth = $('.event').outerWidth( true );
        // store width event
        this.eventWidth = eventWidth;
        console.log( this.eventWidth );
        $('.width-event').remove();
        // calculate width of complete timeline
        const numberOfEvents = this.state.eventData.length;
        const timelineLength = numberOfEvents * eventWidth + 10;

        $('.scroll-container').css("width", timelineLength+"px");

        const today = new Date();
        let upcoming;
        // calculate upcoming event
        this.state.eventData.map(function(event, index) {
            if (new Date(event.datum) < today)
                upcoming = index;
        })
        console.log(upcoming);

        this.refs.scrollbars.scrollLeft( upcoming * eventWidth );

    $(".flippable").click( function() {
    $("div", this).toggleClass("flipped");
  } );
    }

    componentWillUnmount() {
        document.getElementsByClassName('fadeOutArea')[0].remove();
    }

    render() {

        let left = 0;

        if (this.state.upcomingEvent&&this.eventWidth) {
            left = this.state.upcomingEvent * this.eventWidth;
        }



        return (

                <div className="agenda">
                            {/*<div className="fadeOutArea"></div>*/}
                            <HannaScrollbars style={{height: '70vh',
                                                                             width: '80vw',
                                        overflowY: 'hidden' }}
                                                                ref="scrollbars"
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
    