import head from '$lib/head';

const dates = [
	{
		id: '20220721',
		date: '21.07.2022',
		doorsOpen: '18:45',
		start: '19:30',
		description:
			'Nach einem kurzen Ausflug in die Welt des Themenslams sind wir am Donnerstag, 21. Juli, wieder mit unserem regulären Poetry Slam in der Alten Kaserne vor Ort. Wenn das Wetter passt, werden wir ihn sogar als Open Air veranstalten können. Wie immer buhlen ab 19.30 Uhr Texter:innen und Dichter:innen um eure Gunst, einen Büchergutschein und ein T-Shirt. Einlass ist ab 18.45 Uhr, der Eintritt ist frei, Spenden werden gerne gesehen. Sitzplatzreservierungen braucht ihr keine mehr, wer sich trotzdem einen Stuhl sichern möchte, kann uns gerne anschreiben unter sprechakt.landshut@gmx.de oder über unsere Social Media Kanäle https://www.facebook.com/Sprechakt (Facebook) und @sprechakt_landshut (Instagram). Es ist aber auch kein Problem, spontan vorbeizuschauen.',
		extras:
			'Wie immer haben wir bei unserem Sommerslam auch einen musikalischen Gast. Dieses Mal beehrt uns "Sylvenklang". Wenn ihr euch in den Sound der Landshuter Musikerin schonmal reinhören wollt, schaut auf http://sylvenklang.de/ vorbei. Dort findet ihr auch weitere Infos zur Künstlerin.'
	},
	{
		id: '20220922',
		date: '22.09.2022',
		doorsOpen: '18:45',
		start: '19:30',
		description: ''
	},
	{
		id: '20221124',
		date: '24.11.2022',
		doorsOpen: '18:45',
		start: '19:30',
		description: ''
	},
	{
		id: '20230126',
		date: '26.01.2023',
		doorsOpen: '18:45',
		start: '19:30',
		description: ''
	}
];

export function getEventsById(): { [id: string]: typeof dates[number] } {
	return dates.reduce((acc, event) => {
		return { ...acc, [event.id]: event };
	}, {});
}

export function getNextEvents() {
	return head(dates, 5);
}