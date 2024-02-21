let {createApp} = Vue;

const COOKIE_NAME_TFI_FORM = "pf-tfi-form";

createApp(
	{
		data() {
			return {
				questions: [{
					"question": "Welk percentage van de tijd dat u wakker was, was u zich BEWUST VAN uw tinnitus, in de afgelopen week?",
					"type": "range",
					"min": 0,
					"max": 100,
					"step": 10,
					"value": 0,
					"value_postfix": "%",
					"mapping": {
						"0": 0, "10": 1, "20": 2, "30": 3, "40": 4, "50": 5, "60": 6, "70": 7, "80": 8, "90": 9, "100": 10,
					},
					"notes": {
						"left": "Nooit van bewust", "right": "Altijd van bewust",
					}
				}, {
					"question": "Hoe STERK of LUID was uw tinnitus in de afgelopen week?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Helemaal niet sterk of luid", "right": "Uiterst sterk of luid",
					}
				}, {
					"question": "Welk percentage van de tijd dat u wakker was, HINDERDE uw tinnitus u in de afgelopen week?",
					"type": "range",
					"min": 0,
					"max": 100,
					"step": 10,
					"value": 0,
					"value_postfix": "%",
					"mapping": {
						"0": 0, "10": 1, "20": 2, "30": 3, "40": 4, "50": 5, "60": 6, "70": 7, "80": 8, "90": 9, "100": 10,
					},
					"notes": {
						"left": "Nooit", "right": "Altijd",
					}
				}, {
					"question": "In de afgelopen week, had u het gevoel uw tinnitus ONDER CONTROLE te hebben?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Heel goed onder controle", "right": "Nooit onder controle",
					}
				}, {
					"question": "Hoe gemakkelijk was het voor u om met uw tinnitus OM TE GAAN in de afgelopen week?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Heel gemakkelijk om mee om te gaan", "right": "Onmogelijk om mee om te gaan",
					}
				}, {
					"question": "Hoe gemakkelijk was het voor u om uw tinnitus te NEGEREN in de afgelopen week?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Heel gemakkelijk te negeren", "right": "Onmogelijk te negeren",
					}
				}, {
					"question": "In welke mate heeft uw tinnitus in de AFGELOPEN week uw vermogen om zich te CONCENTREREN verstoord?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Niet verstoord", "right": "Volledig verstoord",
					}
				}, {
					"question": "In welke mate heeft uw tinnitus in de AFGELOPEN week uw vermogen om HELDER TE DENKEN verstoord?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Niet verstoord", "right": "Volledig verstoord",
					}
				}, {
					"question": "In welke mate heeft uw tinnitus in de AFGELOPEN week uw vermogen om AANDACHT TE GEVEN aan andere dingen dan uw tinnitus verstoord?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Niet verstoord", "right": "Volledig verstoord",
					}
				}, {
					"question": "Hoe vaak hebt u vanwege uw tinnitus moeite gehad om IN SLAAP TE VALLEN of DOOR TE SLAPEN in de afgelopen week?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Nooit moeite gehad", "right": "Altijd moeite gehad",
					}
				}, {
					"question": "Hoe vaak hebt u vanwege uw tinnitus moeite gehad om ZOVEEL SLAAP te krijgen als u nodig had in de afgelopen week?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Nooit moeite gehad", "right": "Altijd moeite gehad",
					}
				}, {
					"question": "Gedurende hoeveel tijd belette uw tinnitus u dat u zo DIEP of RUSTIG kon slapen als u zou willen in de afgelopen week?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Nooit moeite gehad", "right": "Altijd moeite gehad",
					}
				}, {
					"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK uw vermogen om DUIDELIJK TE HOREN verstoord?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Niet verstoord", "right": "Volledig verstoord",
					}
				}, {
					"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK uw vermogen om MENSEN te VERSTAAN die aan het praten zijn verstoord?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Niet verstoord", "right": "Volledig verstoord",
					}
				}, {
					"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK uw vermogen om GESPREKKEN in groep of op bijeenkomsten te volgen verstoord?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Niet verstoord", "right": "Volledig verstoord",
					}
				}, {
					"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK uw STILLE, RUSTGEVENDE ACTIVITEITEN verstoord?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Niet verstoord", "right": "Volledig verstoord",
					}
				}, {
					"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK uw vermogen om U TE ONTSPANNEN verstoord?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Niet verstoord", "right": "Volledig verstoord",
					}
				}, {
					"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK uw vermogen om van RUST EN STILTE te genieten verstoord?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Niet verstoord", "right": "Volledig verstoord",
					}
				}, {
					"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK het genieten van SOCIALE ACTIVITEITEN verstoord?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Niet verstoord", "right": "Volledig verstoord",
					}
				}, {
					"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK het GENIETEN VAN HET LEVEN voor u verstoord?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Niet verstoord", "right": "Volledig verstoord",
					}
				}, {
					"question": "In welke mate heeft uw tinnitus in de AFGELOPEN WEEK uw RELATIES met familie, vrienden en anderen verstoord?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Niet verstoord", "right": "Volledig verstoord",
					}
				}, {
					"question": "Hoe vaak hebt u vanwege uw tinnitus moeite gehad met uw WERK OF ANDERE TAKEN, zoals huishoudelijk werk, schoolwerk of zorgen voor kinderen of anderen in de AFGELOPEN WEEK?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Nooit moeite gehad", "right": "Altijd moeite gehad",
					}
				}, {
					"question": "Hoe ONGERUST of BEZORGD voelde u zich vanwege uw tinnitus in de AFGELOPEN WEEK?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Helemaal niet ongerust of bezorgd", "right": "Uiterst ongerust of bezorgd",
					}
				}, {
					"question": "Hoe GEËRGERD of VAN STREEK was u vanwege uw tinnitus in de AFGELOPEN WEEK?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Helemaal niet gehinderd of van streek", "right": "Uiterst gehinderd of van streek",
					}
				}, {
					"question": "Hoe DEPRESSIEF was u vanwege uw tinnitus in de AFGELOPEN WEEK?",
					"type": "range",
					"min": 0,
					"max": 10,
					"step": 1,
					"value": 0,
					"notes": {
						"left": "Helemaal niet depressief", "right": "Uiterst depressief",
					}
				}],
			}
		}, mounted() {
			let cookie = getCookie( COOKIE_NAME_TFI_FORM );
			if (cookie === null) {
				this.reset();
			} else {
				try {
					let setValues = JSON.parse( cookie );
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
		}, watch: {
			questions: {
				handler( newValue, oldValue ) {
					this.saveToCookie();
				}, deep: true
			}
		}, methods: {
			reset() {
				this.questions.forEach(
					(question) => {
						question['selected'] = 'default';
					}
				);
			}, saveToCookie() {
				let answers = this.questions.map(
					(question) => {
						return question.selected;
					}
				);
			setListCookie( COOKIE_NAME_TFI_FORM, answers, 7 );
			}, eraseAndRedirect( location ) {
				window.location.href = location;
			}
		}, computed: {
			score: function () {
				let result = this.questions.map(
					(question) => {
						if (question.mapping !== undefined) {
							return question.mapping[question.selected];
						} else {
                    return question.selected;
						}
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
				if (result === null) {
					return null;
				} else {
					Math.round(return result / 2.5);
				}
			}
		}
	}
).mount( '#pf-shortcode-tfi-container-' + pfShortcodeTfiId );