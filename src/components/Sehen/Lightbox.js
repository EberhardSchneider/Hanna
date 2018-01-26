import React, { Component } from 'react';
import $ from 'jquery'
import { LeftArrow, RightArrow, ExitIcon } from './LightboxIcons.js';
import Zoom from './Zoom.js'

class Lightbox extends Component {
    constructor(props) {
        super(props);

        this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
        this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
        this.onLoadHandler = this.onLoadHandler.bind(this);

        this.state = { index: this.props.index, status: "loading" };
    }


    componentDidMount() {
        // workaround for the z-index of nested components
        this.saveZIndex = $('.menu-item').css('z-index');
        $('.menu-item').css('z-index','-255');
    $('.home-button').css('opacity', '0');
        $('.fadeOutArea-2').css('z-index','-255');
    }

    componentDidUpdate() {
    }



    componentWillUnmount() {
        $('.menu-item').css('z-index',this.saveZIndex);
        $('.fadeOutArea-2').css('z-index','0');
    $('.home-button').css('opacity', '1');
    }

    onLoadHandler() {
        this.setState( { status: "loaded" });
    }

    render() {
        const imgStyle = this.state.status == "loading" ? { opacity: .1 } : {opacity: 1};
        const Spinner = () => ( <div className="spinner" style={{ position: "fixed", top: "50%", left: "50%", fontSize: "3em", zIndex: 255, color: "#fff"}}>
                        Loading...
                    </div>);
        const image = this.props.images[this.state.index];
        return (
                <div className="lightbox">
                    <LeftArrow handleClick={this.handleLeftArrowClick}/>
                    <RightArrow handleClick={this.handleRightArrowClick}/>
                    <ExitIcon handleClick={this.props.handleExitIconClick}/>
                    {this.state.status == "loading" ? <Spinner /> : null}
                    <img ref={(image) => { this.image = image }}
                          src={"../images/"+image.big}
                          style={imgStyle}
                          className={"lightbox-image " + image.orientation} 
                          onLoad={this.onLoadHandler}/>
                   
                     
                    <div className="image-subtitle" dangerouslySetInnerHTML={{__html: image.comment}}/>
                    }
                    }
                    }
                </div>
            );

    }

    handleLeftArrowClick() {
        const newIndex = (this.state.index - 1 < 0) ? this.props.images.length - 1 : this.state.index - 1;
        this.setState( { index : newIndex, status: "loading" });
    }

    handleRightArrowClick() {
        const newIndex = (this.state.index + 1 >=  this.props.images.length ) ? 0 : this.state.index + 1;
        this.setState( { index : newIndex, status: "loading"});
    }

}

module.exports = Lightbox;
