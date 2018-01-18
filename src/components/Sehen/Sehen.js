"use strict";
import React from 'react';
import Images from "./Images.js";
import HannaScrollbars from '../HannaScrollbarsHorizontal.js';
import $ from 'jquery';



class Sehen extends React.Component {

    componentDidMount() {
        const fadeOutDiv = document.createElement('div');
        fadeOutDiv.className = "fadeOutArea-2";
        document.body.insertBefore( fadeOutDiv, document.getElementById('app') );
    }

        componentWillUnmount() {
        document.getElementsByClassName('fadeOutArea-2')[0].remove();
    }

    render() {
    const style = this.props.isMobile ?
        { width: '98vw', height: '90vh'} :
        { width: '66vw', height: '90vh'};

        return (
            <div className="sehen">
            {/*<div className="fadeOutArea-2"></div>*/}
        <HannaScrollbars style={style}
                                            autoHide={true}>

            <div className="image-wrapper">
                <Images imageType='scene' rows={2}/>
                <Images imageType='portrait' rows={1}/>
            </div>


        </HannaScrollbars>
        </div>);
    }

}

module.exports = Sehen;

