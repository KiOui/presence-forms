let { createApp } = Vue;

createApp(
	{
		data() {
			return {
				questions: [
				{
					"question": "Soms kan ik het oorsuizen negeren, ook als het er is.",
					"answers": {
						"Juist": 0,
						"Deels waar": 1,
						"Niet waar": 2,
					}
				},
				{
					"question": "Ik kan niet van muziek genieten vanwege het oorsuizen.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Het is oneerlijk dat ik zo onder mijn oorsuizen moet lijden.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Ik word 's nachts vaker wakker door mijn oorsuizen.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Ik ben me bewust van het oorsuizen vanaf het moment dat ik opsta tot het moment dat ik in slaap val.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Je houding t.o.v. het oorsuizen heeft geen invloed op de last ervan.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Meestal is het oorsuizen vrij zacht.",
					"answers": {
						"Juist": 0,
						"Deels waar": 1,
						"Niet waar": 2,
					}
				},
				{
					"question": "Ik ben bang dat het oorsuizen me een zenuwinzinking bezorgt.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Door eht oorsuizen kost het me moeite te zeggen waar geluiden vandaan komen.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "De manier waarop het oorsuizen klinkt is echt onprettig.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Ik heb het gevoel dat ik nooit meer aan het oorsuizen kan ontsnappen.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Door het oorsuizen word ik 's morgens vroeger wakker.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Ik maak me zorgen dat ik dit probleem nooit zal leren verdragen.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Vanwege het oorsuizen is het moeilijker om naar meer mensen tegelijkertijd te luisteren.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Het oorsuizen is meestal luid.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Vanwege het oorsuizen ben ik bang dat er lichamelijk iets mis is met mij.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Als het oorsuizen blijft, is mijn leven niet meer de moeite waard.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Ik heb aan zelfvertrouwen verloren door het oorsuizen.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Ik wou dat iemand begreep wat voor een probleem dit is.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Het oorsuizen leidt me af, wat ik ook doe.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Je kunt maar heel weinig doen om het oorsuizen te leren verdragen.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Het oorsuizen bezorgt me soms oorpijn of hoofdpijn.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Als ik me neerslachtig en somber voel, lijkt het oorsuizen erger.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Ik ben sneller geirriteerd in de omgang met familie en vrienden als gevolg van het oorsuizen.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Door het oorsuizen zijn de spieren van mijn hoofd en nek gespannen.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Door het oorsuizen klinken stemmen van andere mensen voor mij vervormd.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Het zal vreselijk zijn als dit oorsuizen nooit overgaat.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Ik maak me er zorgen over dat het oorsuizen mijn lichamelijke gezondheid kan schaden.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Het oorsuizen lijkt dwars door mijn hoofd te gaan.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Bijna al mijn problemen worden door het oorsuizen veroorzaakt.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Het slapen is mijn grootste probleem.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Het is de manier waarop je over het oorsuizen denkt, NIET het oorsuizen zelf wat je van streek maakt.",
					"answers": {
						"Juist": 0,
						"Deels waar": 1,
						"Niet waar": 2,
					}
				},
				{
					"question": "Door het oorsuizen heb ik meer moeite om een gesprek te volgen.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Ik vind het moeilijker om te ontspannen vanwege het oorsuizen.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Mijn oorsuizen is vaak zo erg dat ik het niet kan negeren.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Het kost me meer tijd om in slaap te vallen vanwege het oorsuizen.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Ik word soms heel boos als ik nadenk over mijn oorsuizen.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Door het oorsuizen vind ik het moeilijker om te telefoneren.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Ik voel me sneller somber door het oorsuizen.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Ik kan het oorsuizen vergeten als ik iets aan het doen ben wat me interesseert.",
					"answers": {
						"Juist": 0,
						"Deels waar": 1,
						"Niet waar": 2,
					}
				},
				{
					"question": "Door het oorsuizen ben ik haast niet meer tegen het leven opgewassen.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Ik heb me altijd al zorgen gemaakt over problemen met mijn oren.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Ik denk er vaak over na of het oorsuizen ooit weg zal gaan.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Ik kan me voorstellen dat ik met het oorsuizen om kan gaan.",
					"answers": {
						"Juist": 0,
						"Deels waar": 1,
						"Niet waar": 2,
					}
				},
				{
					"question": "Het oorsuizen wordt nooit minder.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Een sterker iemand zou dit probleem misschien makkelijker accepteren.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Ik ben slachtoffer van mijn oorsuizen.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Het oorsuizen heeft mijn concentratie verminderd.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Het oorsuizen is een van die problemen in het leven, waarmee je moet leren leven.",
					"answers": {
						"Juist": 0,
						"Deels waar": 1,
						"Niet waar": 2,
					}
				},
				{
					"question": "Vanwege het oorsuizen kan ik niet van de radio of televisie genieten.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Het oorsuizen leidt soms tot zware hoofdpijn.",
					"answers": {
						"Juist": 2,
						"Deels waar": 1,
						"Niet waar": 0,
					}
				},
				{
					"question": "Ik ben altijd al een lichte slaper geweest.",
					"answers": {
						"Juist": 0,
						"Deels waar": 1,
						"Niet waar": 2,
					}
				}
				],
				score: 0,
			}
		},
		mounted() {

		},
		methods: {

		}
	}
).mount( '#pf-shortcode-tq-container-' + pfShortcodeTqId );