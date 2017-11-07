import React, { Component } from 'react';
import AudioPlayer from './Hoeren/AudioPlayer.js'


const audioData = {
	audioSources: [
		{ komponist: "Giovanni Battista Pergolesi", titel: "Salve Regina", src: "audio/Salve_Regina.mp3" },
		{ komponist: "Martino Pesenti", titel: "Filli, Filli, non t'amo più", src: "audio/Filli_Filli.mp3" },
		{ komponist: "GIOVANNI ANTONIO RIGATTI", titel: "O dolcezza incredibile d´amore", src: "audio/O_dolcezza_incredibile.mp3" },
		{ komponist: "Wolfgang Heiniger", titel: "Lapislazuli", src: "audio/Lapislazuli.mp3" },
		{ komponist: "ERNEST CHAUSSON", titel: "Sérénade", src: "audio/Chausson_Serenade.mp3" }
	],
	audioDescriptions: [
		{ ort: "Dom zu Maria Saal, Kärnten", jahr: "2013",
			beschreibung: (<span>Livemitschnitt<br/>Meine Seele preist den Herrn</span>),
			besetzung: [ "Roswitha Dokalik - Violine Leitung"],
			disclaimer: "mit freundlicher Genehmigung von Stefan Schweiger" },
		{
			ort: "Rathaussaal St. Veit, Kärnten", jahr: "2013",
			beschreibung: (<span>Livemitschnitt<br/>L´inatteso paesaggio della seconda prattica</span>),
			besetzung: [ "Franco Pavan - Theorbe, Leitung", "Trigonale 2013" ],
			disclaimer: (<span>mit freundlicher Genehmigung von Stefan&nbsp;Schweiger</span>)
		},
		{
			ort: "Rathaussaal St. Veit, Kärnten", jahr: "2013",
			beschreibung: (<span>)Livemitschnitt<br/>L´inatteso paesaggio della seconda prattica</span>),
			besetzung: [ "Franco Pavan - Theorbe, Leitung", "Ida Aldrian - Mezzosopran", "Trigonale 2013" ],
			disclaimer: (<span>mit freundlicher Genehmigung von Stefan&nbsp;Schweiger</span>)
		},
		{
			ort: "Berlin", jahr: "2015",
			besetzung: [ (<span><br/>Oboe - Christoph Hartmann</span>), "Sopran - Hanna Herfurtner", "Elektronik - Wolfgang Heiniger" ]
		},
		{
			ort: "Tokio", jahr: "2012",
			beschreibung: (<span>Livemitschnitt<br/>"The Art of Coloratura"<br/>Musashino Cultural Hall</span>),
			besetzung: [ "Masahiro Saitoh - Klavier" ]
		}
	]
};



class Hoeren extends Component {
	render() {
		return <div className="audio-player">
						<div className="audio-image"></div>
						<AudioPlayer audioData={audioData}/>
					</div>;
	}
}

module.exports = Hoeren;