import React, { Component } from 'react';
import $ from 'jquery';
import { Scrollbars } from 'react-custom-scrollbars';
import normalizeWheel from 'normalize-wheel';

export default class HannaScrollbars extends Component {

    constructor(props, ...rest) {
        super(props, ...rest);
        this.wheelHandler=this.wheelHandler.bind(this);
        this.currentTarget = 0;

    }

    componentDidMount() {
       $("<div class='rail-horizontal'></div>").appendTo(".track-horizontal");
    }

    componentWillUnmount() {
    }

    getScrollLeft() {
        return this.refs.scrollbars.getScrollLeft();
    }

    getCurrentTarget() {
        return this.currentTarget;
    }

    getScrollWidth() {
        return this.refs.scrollbars.getScrollWidth();
    }

    getWidth() {
        return this.refs.scrollbars.getWidth();
    }

    getValues() {
        return this.refs.scrollbars.getValues();
    }

    scrollLeft(left) {
        const { scrollbars } = this.refs;
        const scrollLeft = scrollbars.getScrollLeft();
        const scrollWidth = scrollbars.getScrollWidth();
        // const val = MathUtil.mapValueInRange(left, 0, scrollWidth, scrollWidth * 0.2, scrollWidth * 0.8);

        // this.spring.setCurrentValue(scrollLeft).setAtRest();

        // this.spring.setEndValue(val);
        left = left < 0 ? 0 : ( left > scrollWidth ? scrollWidth : left);
        this.currentTarget = left;
        this.easingFunction( scrollLeft, left, .2 );
    }


    render() {
        return (
            <Scrollbars
                {...this.props}
                onWheel={this.wheelHandler}
                height={64}
                autoHide
                ref="scrollbars"
                />
        );
    }

    easingFunction(begin, end, time) {
        if (this.intervalID) {
            window.clearInterval(this.intervalID);
        }
        const callback = this.testcallback.bind(this);
        const timeInterval = .005;
        const repetitions = time/timeInterval;
        let counter = 0;
        let val = begin;
        const delta = (end-begin)/repetitions;
        const self = this;
        this.intervalID= window.setInterval(function() {
            callback( val );
            val += delta;
            counter++;

            if (counter >= repetitions) {
                window.clearInterval(self.intervalID);
            }
        }, timeInterval * 1000)
    }

    testcallback( val ) {
        this.refs.scrollbars.scrollLeft( val );
    }

    wheelHandler(e) {

        let scrollbars = this.refs.scrollbars;
        const normalized = normalizeWheel( e );
        let left = parseInt( this.getCurrentTarget() );
        let delta = parseInt( normalized.pixelY, 10 );
        let newLeft = left + delta ;
        this.scrollLeft( newLeft );


    }


}
