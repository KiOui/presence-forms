let { createApp } = Vue;

const COOKIE_NAME_THI_FORM = "pf-thi-form";

createApp(
	{
		data() {
			return {
				questions: [
					{
						"question": "Kunt u zich moeilijk concentreren vanwege uw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Verstaat u andere mensen moeilijk vanwege de luidheid van uw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Maakt tinnitus u boos?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Voelt u zich verward vanwege uw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Voelt u zich wanhopig vanwege uw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Klaagt u veel over uw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Heeft u 's avonds moeite met in slaap vallen vanwege uw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Heeft u het gevoel niet aan uw tinnitus te kunnen ontsnappen?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Bemoeilijkt uw tinnitus een plezier sociaal leven? (bijv. uit eten gaan, concert of film bezoeken)",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Voelt u zich gefrustreerd vanwege uw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Denkt u, vanwege uw tinnitus dat u aan een ernstige ziekte lijdt?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Kunt u vanwege uw tinnitus moeilijk van het leven genieten?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Bemoeilijkt uw tinnitus verantwoordelijkheden thuis of op uw werk?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Bent u vaak geïrriteerd vanwege uw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Is het voor u moelijk om te lezen, vanwege uw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Raakt u van slag door uw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Heeft de tinnitus spanningen veroorzaakt tussen u en uw familieleden en vrienden?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Is het moeilijk voor u om uw aandacht van de tinnitus naar iets anders te verplaatsen?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Heeft u het gevoel geen controle te hebben over uw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Bent u vaak moe vanwege uw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Bent u neerslachtig vanwege uw tinnitus?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Maakt uw tinnitus u angstig?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Heeft u het gevoel niet meer met uw tinnitus te kunnen omgaan?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Wordt uw tinnitus erger wanneer u stress of spanningen ervaart?",
						"answers": {
							"Ja": 4,
							"Soms": 2,
							"Nee": 0,
						}
					},
					{
						"question": "Voelt u zich onzeker vanwege uw tinnitus?",
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