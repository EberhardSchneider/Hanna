import React, { Component } from 'react';

import Impressum from './Impressum.js';

class KontaktBox1 extends Component {
<<<<<<< HEAD

    render() {
        return  <div className="kontakt-box-1">
                        HANNA<br/>
                        <a href="mailto:hannaherfurtner@gmail.com">hannaherfurtner(at)gmail.com</a><br/><br/>

                        Um den aktuellen Newsletter zu erhalten, schreiben Sie mir einfach eine email.<br/>

                        <div className="impressum-link" onClick={this.props.showImpressum}>Impressum</div>

                    </div>
        }
=======
	render() {
		return  <div className="kontakt-box-1">
						HANNA<br/>
						<a href="mailto:hannaherfurtner@gmail.com">hannaherfurtner(at)gmail.com</a><br/><br/>

						Um den aktuellen Newsletter zu erhalten, schreiben Sie mir einfach eine email.<br/>

						<div className="impressum-link" onClick={this.props.clickHandler}>Impressum</div>

					</div>
	}
>>>>>>> 20dbb4c1c72ce85278fcc5d446f8bcdde50e15f5
}

const KontaktBox2 = () => {
    return <div className="kontakt-box-2">
                    ARTISTAINTERNATIONAL<br/>
                    Franziska Hunke<br/>
                    Hans-Sachs-Straße 22<br/>
                    80469 München<br/>
                    <br/>
                    +49 1721907999<br/>
                    <a href="http://www.artistainternational.com/sopran/hannaherfurtner/index.php"
                         target="_blank">www.artistainternational.com
                    </a><br/>
                </div>
}

class Kontakt extends Component {


	constructor(props) {
		super(props);
		// TODO make component stateless
		this.state = { showOverlay: false };

		this.handleClick = this.handleClick.bind(this);
	}

	render() {

		const kontaktText = (<div><div className="kontakt-schablone"/> 
					<div className="kontakt-text">
						<KontaktBox1 clickHandler={this.handleClick}/>
						<KontaktBox2/>
					</div></div>);
		return <div className="kontakt"> {/*wrapper*/}
			{this.state.showOverlay ? 
				<Impressum clickHandler={this.handleClick}/> : kontaktText }
			

		</div>
	}

	handleClick() {
		this.setState( { showOverlay: !this.state.showOverlay });
	}

}

module.exports = Kontakt;