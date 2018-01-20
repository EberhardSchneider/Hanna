import React, { Component } from 'react';
import $ from 'jquery'
import { LeftArrow, RightArrow, ExitIcon } from './LightboxIcons.js';
import Zoom from './Zoom.js'

class Lightbox extends Component {
    constructor(props) {
        super(props);

        this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
        this.handleRightArrowClick = this.handleRightArrowClick.bind(this);

        this.state = { index: this.props.index };
    }


    componentDidMount() {
        // workaround for the z-index of nested components
        this.saveZIndex = $('.menu-item').css('z-index');
        $('.menu-item').css('z-index','-255');
    $('.home-button').css('opacity', '0');
        $('.fadeOutArea-2').css('z-index','-255');
    }

    componentDidUpdate() {
        console.log("Lightbox updates");
        setTimeout( () => { $('.lightbox-image').css({opacity: 1}); }, 100 );
    }



    componentWillUnmount() {
        $('.menu-item').css('z-index',this.saveZIndex);
        $('.fadeOutArea-2').css('z-index','0');
    $('.home-button').css('opacity', '1');
    }

    render() {

        const image = this.props.images[this.state.index];
        return (
                <div className="lightbox">
                    <LeftArrow handleClick={this.handleLeftArrowClick}/>
                    <RightArrow handleClick={this.handleRightArrowClick}/>
                    <ExitIcon handleClick={this.props.handleExitIconClick}/>
                    <Zoom ref="zoom"
                          src={"../images/"+image.big}
                          class={"lightbox-image " + image.orientation} />
                     
                    <div className="image-subtitle" dangerouslySetInnerHTML={{__html: image.comment}}/>
                </div>
            );

    }

    handleLeftArrowClick() {
        const newIndex = (this.state.index - 1 < 0) ? this.props.images.length - 1 : this.state.index - 1;
        $('.lightbox-image').css({opacity: 0});
        this.setState( { index : newIndex });
    }

    handleRightArrowClick() {
        const newIndex = (this.state.index + 1 >=  this.props.images.length ) ? 0 : this.state.index + 1;
        $('.lightbox-image').css({opacity: 0});
        this.setState( { index : newIndex });
    }

}

module.exports = Lightbox;
