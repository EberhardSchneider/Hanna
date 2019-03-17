import React, { Component } from 'react';

class SpinnerImage extends Component {
    constructor(props) {
        super(props);
        this.status = "loading";
        this.onLoadHandler = this.onLoadHandler.bind(this);
    }

    componentDidUpdate() {
        this.status = "loading";
    }



    onLoadHandler() {
        this.status = "loaded";
        this.forceUpdate();
    }

    render() {
        const imgStyle = this.status == "loading"  ? { opacity: 0, transition: 'opacity 1s' } : {opacity: 1, transition: 'opacity 1s'};
        const Spinner = () => ( <div className="spinner" style={{ position: "fixed", top: "50%", left: "50%", fontSize: "3em", zIndex: 255, color: "#fff"}}>
                        Loading...
                    </div>);
        return (
            // {this.state.status == "loading" ? <Spinner /> : null}
            <img {...this.props} onLoad={this.onLoadHandler} style={imgStyle}/>
        );
    }
}

module.exports = SpinnerImage;