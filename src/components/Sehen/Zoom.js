import React, { Component } from 'react';
import $ from 'jquery';

class Zoom extends Component {

    constructor(props) {
        super(props);
        this._imageStyle = { transition: 'opacity 0s', opacity: 0};
        this._imageLoaded = false;
        this._imageReady = false;

        this.preloadImage = this.preloadImage.bind(this);

        this.preloadImage();
    }

    renderChildren() {
        return React.Children.map( this.props.children,
            child => {
                return React.cloneElement(child, 
                                            {   ref: "myImage"     });
            });
    }

    componentDidUpdate() {
        if (this._imageLoaded) {
            $('.zoom').attr('style','transition: opacity 0s, transform 0s; transform: scale(.98,.98);opacity: .6');
            setTimeout( () => { $('.zoom').attr('style','transition: opacity 1s, transform 1s ease-in-out; transform: scale(1,1); opacity: 1') }, 150 );
        }
    }

    componentWillUpdate() {
        this.preloadImage();
    }


    componentWillUnmount() {
    }

    preloadImage() {
         if (this._imageReady) {
            this._imageLoaded = true;
            this._image.load = null;
            this._image = null;
            this._imageReady = false;
            return;
         }

         if (this._image) {
            this._image.load = null;
         }
        this._image = new Image();

        const self = this;
        this._image.onload = function() {
            self._imageReady = true;
            self.forceUpdate();
        };

        this._image.src = this.props.src;
        this._imageLoaded = false;
    }

    render() {
        console.log("Zoom renders");
        const style = {
            transition: 'opacity 0s, transform 0s',
            transform: 'scale(.90,.90)',
            opacity: 0
        };



        return (<div  className="zoom" style={style}>
            {this._imageLoaded ? <img src={this.props.src} className={this.props.class}/> : <div>Loading</div>}
        </div>);
    }
}

module.exports = Zoom;
