let { createApp } = Vue;

const COOKIE_NAME_THI_FORM = "pf-thi-form";

createApp(
	{
		data() {
			return {
				tq_form_value: TQ_FORM_VALUE,
				tfi_form_value: TFI_FORM_VALUE,
				questions: [
					{
						"question": "Kun je je moeilijk concentreren vanwege jouw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Versta je andere mensen moeilijk vanwege de luidheid van jouw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Maakt tinnitus jou boos?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Voel je je verward vanwege jouw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Voel je je wanhopig vanwege jouw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Klaag je veel over jouw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Heb je 's avonds moeite met in slaap vallen vanwege jouw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Heb je het gevoel niet aan jouw tinnitus te kunnen ontsnappen?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Bemoeilijkt tinnitus jouw plezier en sociale leven? (bijv. uit eten gaan, concert of film bezoeken)",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Voel je je gefrustreerd vanwege jouw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Denk je, vanwege jouw tinnitus dat je aan een ernstige ziekte lijdt?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Kun je vanwege jouw tinnitus moeilijk van het leven genieten?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Bemoeilijkt jouw tinnitus verantwoordelijkheden thuis of op je werk?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Ben je vaak geïrriteerd vanwege jouw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Is het voor jou moelijk om te lezen, vanwege jouw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Raak je van slag door jouw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Heeft de tinnitus spanningen veroorzaakt tussen jou en jouw familieleden en vrienden?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Is het moeilijk voor je om jouw aandacht van de tinnitus naar iets anders te verplaatsen?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Heb je het gevoel geen controle te hebben over jouw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Ben je vaak moe vanwege jouw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Ben je neerslachtig vanwege jouw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Maakt tinnitus jou angstig?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Heb je het gevoel niet meer met jouw tinnitus om te kunnen gaan?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Wordt jouw tinnitus erger wanneer je stress of spanningen ervaart?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Voel je je onzeker vanwege jouw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					}
				],
			}
		},
		mounted() {
			let cookie = getCookie(COOKIE_NAME_THI_FORM);
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
).mount( '#pf-shortcode-thi-container-' + pfShortcodeThiId );