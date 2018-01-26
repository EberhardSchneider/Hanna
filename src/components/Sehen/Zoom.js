import React, { Component } from 'react';
import $ from 'jquery';

class Zoom extends Component {

    constructor(props) {
        console.log("Constructor...");
        super(props);
        this._imageStyle = { transition: 'opacity 0s', opacity: 0};
        this._imageLoading = false;
        this._imageLoaded = false;

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
        if (this._newImage) {
            this._newImage = false;
            this.preloadImage();
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.src != this.props.src)
           this._newImage = true;

    }


    componentWillUnmount() {
        console.log("Destructor...");
    }

    preloadImage() {
        this._imageLoaded = false;

         if (this._imageLoading) {
            this._imageLoading = false;
            this._image.load = null;
            this._image = null;
         }

         // if (this._image) {
         //    this._image.load = null;
         // }

        this._image = new Image();

        const self = this;
        this._image.onload = function() {
            self._imageLoaded = true;
            self._imageLoading = false;
            self.forceUpdate();
        };

        this._imageLoading = true;
        this._image.src = this.props.src;

    }

    render() {
        const style = {
            transition: 'opacity 0s, transform 0s',
            transform: 'scale(.90,.90)',
            opacity: 0
        };

        console.log(this._imageLoaded ? "Rendering Image" : "Rendering Spinner");



        return (<div  className="zoom" style={style}>
            {this._imageLoaded ? <img src={this.props.src} className={this.props.class}/> : <div>Loading</div>}
        </div>);
    }
}

module.exports = Zoom;
