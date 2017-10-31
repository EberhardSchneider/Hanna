import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { SpringSystem, MathUtil } from 'rebound';

export default class SpringScrollbars extends Component {

    constructor(props, ...rest) {
        super(props, ...rest);
        this.handleSpringUpdate = this.handleSpringUpdate.bind(this);

        this.currentTarget = 0;
    }

    componentDidMount() {
        this.springSystem = new SpringSystem();
        this.spring = this.springSystem.createSpring(.1,.1);
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

    handleSpringUpdate(spring) {
        const { scrollbars } = this.refs;
        let val = spring.getCurrentValue();
        const scrollWidth = scrollbars.getScrollWidth();
        val = val < 0 ? 0 : ( val > scrollWidth ? scrollWidth : val);
        scrollbars.scrollLeft(val);
    }

    render() {
        return (
            <Scrollbars
                {...this.props}
                ref="scrollbars"/>
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
}