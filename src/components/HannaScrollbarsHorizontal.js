import React, { Component } from 'react';
import $ from 'jquery';
import { Scrollbars } from 'react-custom-scrollbars';
import normalizeWheel from 'normalize-wheel';
import { SpringSystem, MathUtil } from 'rebound';

export default class HannaScrollbars extends Component {

    constructor(props, ...rest) {
        super(props, ...rest);
        this.wheelHandler=this.wheelHandler.bind(this);
        this.scrollLeft=this.scrollLeft.bind(this);
        this.currentTarget = 0;
        this.handleSpringUpdate = this.handleSpringUpdate.bind(this);
    }

    componentDidMount() {
       $("<div class='rail-horizontal'></div>").appendTo(".track-horizontal");
       this.springSystem = new SpringSystem();
       this.spring = this.springSystem.createSpring();
       this.spring.addListener({ onSpringUpdate: this.handleSpringUpdate });
    }

    componentWillUnmount() {
      this.springSystem.deregisterSpring(this.spring);
      this.springSystem.removeAllListeners();
      this.springSystem = undefined;
      this.spring.destroy();
      this.spring = undefined;
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
        this.currentTarget = left;

        const { scrollbars } = this.refs;
        const scrollLeft = scrollbars.getScrollLeft();
        const scrollWidth = scrollbars.getScrollWidth();
        const val = MathUtil.mapValueInRange(left, 0, scrollWidth,
          scrollWidth * 0.05, scrollWidth * 0.95);
      


        this.spring.setCurrentValue(scrollLeft).setAtRest();

        this.spring.setEndValue(val);

        // this.easingFunction( scrollLeft, left, .2 );
    }

    handleSpringUpdate(spring) {
      const { scrollbars } = this.refs;
      const val = spring.getCurrentValue();
      scrollbars.scrollLeft(val);
    }


    render() {
        return (
            <Scrollbars
                {...this.props}
                onWheel={this.wheelHandler}
                onUpdate={this.handleScroll}
                ref="scrollbars"
                thumbSize={64}
                renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
                renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}/>
        );
    }

    // handleScroll() {
    //   const { scrollbars } = this.refs;
    //   this.currentTarget = scrollbars.getScrollLeft();
    // }

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
        this.currentTarget = newLeft;

        this.scrollLeft( newLeft );


    }


}
