import React, { Component } from 'react';
import $ from 'jquery';

class Impressum extends Component {


	componentDidMount() {
		// workaround for the z-index of nested components
		this.saveZIndexMenuItems = $('.menu-item').css('z-index');
		$('.menu-item').css('z-index','-255');
		this.saveZIndexHomeButton = $('.home-button').css('z-index');
		$('.home-button').css('z-index','-255');
	}

	componentWillUnmount() {
		$('.menu-item').css('z-index', this.saveZIndexMenuItems );
		$('.home-button').css('z-index', this.saveZIndexHomeButton);
	}

render() {

	return ( <div className="impressum-overlay" onClick={this.props.clickHandler} >
	<div className="impressum-text">
		<h1>Impressum</h1>

            <p>ANGABEN GEMÄß § 5 TMG</p>

            <p>Hanna Herfurtner<br/>
                Eisenacherstr. 57<br/>
                10823 Berlin</p>


		<h2>KONTAKT</h2>
			<p>hannaherfurtner(at)gmail.com</p>


		<h2>DISCLAIMER</h2>
			<p>Die Inhalte meiner Seiten wurden mit größter Sorgfalt erstellt. 
			Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.</p>

		<h2>HAFTUNG FÜR LINKS</h2>
			<p>Mein Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.</p>

		<h2>URHEBERRECHT</h2>
			<p>Die erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads 
			und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.</p>

		<h2>DATENSCHUTZ</h2>
			<p>Die Nutzung meiner Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf meinen Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Ich weise darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
			 Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. 
			Ich behalte mir ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
			Quelle: eRecht24.de</p>

		<h2>FOTONACHWEIS BANNER</h2>
			<p>VITA © Marco Borggreve / HÖREN © Karl Forster/ KONTAKT  © Ursula Kaufmann</p>

		<h2>GESTALTUNG</h2>
			<p>Anna Derriks & Hanna Herfurtner  </p>

		<h2>PROGRAMMIERUNG</h2>
			<p>Eberhard Schneider / www.eberhardschneider.info</p>
			<h2><a href="/admin.php">SITE ADMIN</a></h2>

	</div>
</div>
		);
	}	
}

module.exports = Impressum;