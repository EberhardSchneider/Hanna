import React, { Component } from 'react';
import Impressum from './Impressum.js';

class KontaktBox1 extends Component {

    render() {
        return  <div className="kontakt-box-1">
                        HANNA<br/>
                        <a href="mailto:hannaherfurtner@gmail.com">hannaherfurtner(at)gmail.com</a><br/><br/>

                        Um den aktuellen Newsletter zu erhalten, schreiben Sie mir einfach eine email.<br/>

                        <div className="impressum-link" onClick={this.props.showImpressum}>Impressum</div>

                    </div>
        }
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
        this.state = { showImpressum: false };
    }

    toggleImpressum() {
        this.setState( {showImpressum: !this.state.showImpressum});
    }
    render() {

        return <div className="kontakt"> {/*wrapper*/}
            {this.state.showImpressum ? <Impressum close={this.toggleImpressum.bind(this)} /> : null}
            <div className="kontakt-schablone"/> {/*styled by css*/}
            <div className="kontakt-text">
                <KontaktBox1 showImpressum={this.toggleImpressum.bind(this)}/>
                <KontaktBox2/>
            </div>
        </div>
    }

}

module.exports = Kontakt;