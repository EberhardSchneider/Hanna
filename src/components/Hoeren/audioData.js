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
			beschreibung: "Livemitschnitt<br>Meine Seele preist den Herrn",
			besetzung: [ "Roswitha Dokalik - Violine Leitung"],
			disclaimer: "mit freundlicher Genehmigung von Stefan Schweiger" },
		{
			ort: "Rathaussaal St. Veit, Kärnten", jahr: "2013",
			beschreibung: "Livemitschnitt<br>L´inatteso paesaggio della seconda prattica",
			besetzung: [ "Franco Pavan - Theorbe, Leitung", "Trigonale 2013" ],
			disclaimer: "mit freundlicher Genehmigung von Stefan&nbsp;Schweiger"
		},
		{
			ort: "Rathaussaal St. Veit, Kärnten", jahr: "2013",
			beschreibung: "Livemitschnitt<br>L´inatteso paesaggio della seconda prattica",
			besetzung: [ "Franco Pavan - Theorbe, Leitung", "Ida Aldrian - Mezzosopran", "Trigonale 2013" ],
			disclaimer: "mit freundlicher Genehmigung von Stefan&nbsp;Schweiger"
		},
		{
			ort: "Berlin", jahr: "2015",
			besetzung: [ "<br>Oboe - Christoph Hartmann", "Sopran - Hanna Herfurtner", "Elektronik - Wolfgang Heiniger" ]
		},
		{
			ort: "Tokio", jahr: "2012",
			beschreibung: 'Livemitschnitt<br>"The Art of Coloratura"<br>Musashino Cultural Hall',
			besetzung: [ "Masahiro Saitoh - Klavier" ]
		}
	]
};

module.exports = { audioData };