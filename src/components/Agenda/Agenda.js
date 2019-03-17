import React from 'react';
import $ from 'jquery';

import HannaScrollbars from '../HannaScrollbarsHorizontal';
import Event from './Event';



class Agenda extends React.Component {

    constructor(props) {
        super(props);
        this.state = { eventData: [] };

        // get events data
        $.ajax({

            url: "/testsite/phpincludes/db_events.php",
            type: 'POST',

            dataType: 'json',
            context: this,
            success: function (data) {
                const events = Object.values(data);
                this.setState({ eventData: events });
            }
        });
        // $.ajax({

        //     url: "/events.json",
        //     type: 'GET',

        //     dataType: 'json',
        //     context: this,
        //     success: function (data) {
        //         const events = Object.values(data);
        //         this.setState({ eventData: events });

        //     }
        // });


    }

    componentDidMount() {
        const fadeOutDiv = document.createElement('div');
        fadeOutDiv.className = "fadeOutArea";
        document.body.insertBefore(fadeOutDiv, document.getElementById('app'));

        // // calculate width of event containers
        // $('<div class="event width-event" style="position: absolute; top: -1000px"/>')
        //     .appendTo($('body'));
        // const eventWidth = $('.event').outerWidth(true);
        const eventWidth = 348;
        // store width event
        this.eventWidth = eventWidth;
        // $('.width-event').remove();
        // calculate width of complete timeline
        const numberOfEvents = this.state.eventData.length;
        const timelineLength = numberOfEvents * eventWidth + 10;

        $('.scroll-container').css("width", timelineLength + "px");

        const today = new Date();
        const upcoming = this.state.eventData.findIndex(event => {
            const year = parseInt(event.datum.substr(0,4));
            const month = parseInt(event.datum.substr(5,2));
            const day = parseInt(event.datum.substr(8,2));

            return new Date(year, month, day) >= today
        });
       
    
        this.refs.scrollbars.setScrollLeft((upcoming + 2) * eventWidth);

        $(".flippable").click(function () {
            $("div", this).toggleClass("flipped");
        });
    }


    componentDidUpdate() {
        // // calculate width of event containers
        // $('<div class="event width-event" style="position: absolute; top: -1000px"/>')
        //     .appendTo($('body'));
        // const eventWidth = $('.event').outerWidth(true);
        const eventWidth = 348;

        // store width event
        this.eventWidth = eventWidth;
        // $('.width-event').remove();
        // calculate width of complete timeline
        const numberOfEvents = this.state.eventData.length;
        const timelineLength = numberOfEvents * eventWidth + 10;

        $('.scroll-container').css("width", timelineLength + "px");

        const today = new Date();

        const upcoming = this.state.eventData.findIndex(event => {
            const year = parseInt(event.datum.substr(0,4));
            const month = parseInt(event.datum.substr(5,2));
            const day = parseInt(event.datum.substr(8,2));

            return new Date(year, month, day) >= today
        });
     
        this.refs.scrollbars.setScrollLeft((upcoming +) * eventWidth);

        $(".flippable").click(function () {
            $("div", this).toggleClass("flipped");
        });
    }

    componentWillUnmount() {
        document.getElementsByClassName('fadeOutArea')[0].remove();
    }

    render() {

        let left = 0;

        if (this.state.upcomingEvent && this.eventWidth) {
            left = this.state.upcomingEvent * this.eventWidth;
        }



        return (

            <div className="agenda">
                {/*<div className="fadeOutArea"></div>*/}
                <HannaScrollbars style={{
                    height: '70vh',
                    width: '80vw',
                    overflowY: 'hidden'
                }}
                    ref="scrollbars"
                    autoHide={true}>

                    <div className="scroll-container">
                        {this.state.eventData.map(function (event) {
                            return <Event key={event.id} data={event} />
                        }, this)}
                    </div>


                </HannaScrollbars>


            </div>
        );
    }

}





module.exports = Agenda;
