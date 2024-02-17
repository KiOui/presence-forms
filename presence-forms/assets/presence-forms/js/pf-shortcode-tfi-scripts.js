let { createApp } = Vue;

const COOKIE_NAME_TFI_FORM = "pf-tfi-form";

createApp(
	{
		data() {
			return {
				questions: [
					{
						"question": "Welk percentage van de tijd dat u wakker was, was u zich BEWUST VAN uw tinnitus, in de afgelopen week?",
						"answers": {
							"0%": 0,
							"10%": 1,
							"20%": 2,
							"30%": 3,
							"40%": 4,
							"50%": 5,
							"60%": 6,
							"70%": 7,
							"80%": 8,
							"90%": 9,
							"100%": 10,
						},
						"notes": {
							"left": "Nooit van bewust",
							"right": "Altijd van bewust",
						}
					},
					{
						"question": "Hoe STERK of LUID was uw tinnitus in de afgelopen week?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Helemaal niet sterk of luid",
							"right": "Uiterst sterk of luid",
						}
					},
					{
						"question": "Welk percentage van de tijd dat u wakker was, HINDERDE uw tinnitus u in de afgelopen week?",
						"answers": {
							"0%": 0,
							"10%": 1,
							"20%": 2,
							"30%": 3,
							"40%": 4,
							"50%": 5,
							"60%": 6,
							"70%": 7,
							"80%": 8,
							"90%": 9,
							"100%": 10,
						},
						"notes": {
							"left": "Nooit",
							"right": "Altijd",
						}
					},
					{
						"question": "In de afgelopen week, had u het gevoel uw tinnitus ONDER CONTROLE te hebben?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Heel goed onder controle",
							"right": "Nooit onder controle",
						}
					},
					{
						"question": "Hoe gemakkelijk was het voor u om met uw tinnitus OM TE GAAN in de afgelopen week?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Heel gemakkelijk om mee om te gaan",
							"right": "Onmogelijk om mee om te gaan",
						}
					},
					{
						"question": "Hoe gemakkelijk was het voor u om met uw tinnitus te NEGEREN in de afgelopen week?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Heel gemakkelijk te negeren",
							"right": "Onmogelijk te negeren",
						}
					},
					{
						"question": "In welke mate heeft uw tinnitus in de AFGELOPEN week uw vermogen om zich te CONCENTREREN verstoord?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Niet verstoord",
							"right": "Volledig verstoord",
						}
					},
					{
						"question": "In welke mate heeft uw tinnitus in de AFGELOPEN week uw vermogen om HELDER TE DENKEN verstoord?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Niet verstoord",
							"right": "Volledig verstoord",
						}
					},
					{
						"question": "In welke mate heeft uw tinnitus in de AFGELOPEN week uw vermogen om AANDACHT TE GEVEN aan andere dingen dan uw tinnitus verstoord?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Niet verstoord",
							"right": "Volledig verstoord",
						}
					},
					{
						"question": "Hoe vaak hebt u vanwege uw tinnitus moeite gehad om IN SLAAP TE VALLEN of DOOR TE SLAPEN in de afgelopen week?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Nooit moeite gehad",
							"right": "Altijd moeite gehad",
						}
					},
					{
						"question": "Hoe vaak hebt u vanwege uw tinnitus moeite gehad om ZOVEEL SLAAP te krijgen als u nodig had in de afgelopen week?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Nooit moeite gehad",
							"right": "Altijd moeite gehad",
						}
					},
					{
						"question": "Gedurende hoeveel tijd belette uw tinnitus u dat u zo DIEP of RUSTIG kon slapen als u zou willen in de afgelopen week?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Nooit moeite gehad",
							"right": "Altijd moeite gehad",
						}
					},
					{
						"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK uw vermogen om DUIDELIJK TE HOREN verstoord?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Niet verstoord",
							"right": "Volledig verstoord",
						}
					},
					{
						"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK uw vermogen om MENSEN te VERSTAAN die aan het praten zijn verstoord?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Niet verstoord",
							"right": "Volledig verstoord",
						}
					},
					{
						"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK uw vermogen om GESPREKKEN in groep of op bijeenkomsten te volgen verstoord?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Niet verstoord",
							"right": "Volledig verstoord",
						}
					},
					{
						"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK uw STILLE, RUSTGEVENDE ACTIVITEITEN verstoord?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Niet verstoord",
							"right": "Volledig verstoord",
						}
					},
					{
						"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK uw vermogen om U TE ONTSPANNEN verstoord?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Niet verstoord",
							"right": "Volledig verstoord",
						}
					},
					{
						"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK uw vermogen om van RUST EN STILTE te genieten verstoord?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Niet verstoord",
							"right": "Volledig verstoord",
						}
					},
					{
						"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK het genieten van SOCIALE ACTIVITEITEN verstoord?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Niet verstoord",
							"right": "Volledig verstoord",
						}
					},
					{
						"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK het GENIETEN VAN HET LEVEN voor u verstoord?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Niet verstoord",
							"right": "Volledig verstoord",
						}
					},
					{
						"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK uw RELATIES met familie, vrienden en anderen verstoord?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Niet verstoord",
							"right": "Volledig verstoord",
						}
					},
					{
						"question": "Hoe vaak hebt u vanwege uw tinnitus moeite gehad met uw WERK OF ANDERE TAKEN, zoals huishoudelijk werk, schoolwerk of zorgen voor kinderen of anderen in de AFGELOPEN WEEK?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Nooit moeite gehad",
							"right": "Altijd moeite gehad",
						}
					},
					{
						"question": "Hoe ONGERUST of BEZORGD voelde u zich vanwege uw tinnitus in de AFGELOPEN WEEK?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Helemaal niet ongerust of bezorgd",
							"right": "Uiterst ongerust of bezorgd",
						}
					},
					{
						"question": "Hoe GEËRGERD of VAN STREEK was u vanwege uw tinnitus in de AFGELOPEN WEEK?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Helemaal niet gehinderd of van streek",
							"right": "Uiterst gehinderd of van streek",
						}
					},
					{
						"question": "Hoe DEPRESSIEF was u vanwege uw tinnitus in de AFGELOPEN WEEK?",
						"answers": {
							"0": 0,
							"1": 1,
							"2": 2,
							"3": 3,
							"4": 4,
							"5": 5,
							"6": 6,
							"7": 7,
							"8": 8,
							"9": 9,
							"10": 10,
						},
						"notes": {
							"left": "Helemaal niet depressief",
							"right": "Uiterst depressief",
						}
					}
				],
			}
		},
		mounted() {
			let cookie = getCookie(COOKIE_NAME_TFI_FORM);
			if (cookie === null) {
				this.reset();
			} else {
				try {
					let setValues = JSON.parse(cookie);
					if (typeof setValues === "object") {
						this.questions.forEach(
							(question, index) => {
								if (index < setValues.length) {
									question['selected'] = setValues[index];
								} else {
									question['selected'] = "default";
								}
							}
						);
					} else {
						this.reset();
					}
				} catch {
					this.reset();
				}
			}
		},
		watch: {
			questions: {
				handler(newValue, oldValue) {
					this.saveToCookie();
				},
				deep: true
			}
		},
		methods: {
			reset() {
				this.questions.forEach(
					(question) => {
						question['selected'] = 'default';
					}
				);
			},
			saveToCookie() {
				let answers = this.questions.map((question) => {
					return question.selected;
				});
				setListCookie(COOKIE_NAME_THI_FORM, answers, 7);
			},
			eraseAndRedirect(location) {
				window.location.href = location;
			}
		},
		computed: {
			score: function () {
				return this.questions.map(
					(question) => {
                    return question.selected;
					}
				).reduce(
					(previousValue, currentValue) => {
                    if (previousValue === "default" || previousValue === null) {
                        return null;
                    } else if (currentValue === "default" || currentValue === null) {
                    return null;
                    } else {
								return parseInt( previousValue, 10 ) + parseInt( currentValue, 10 );
						}
						},
					0
				);
			}
		}
	}
).mount( '#pf-shortcode-tfi-container-' + pfShortcodeTfiId );