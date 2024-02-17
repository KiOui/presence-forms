<?php
/**
 * Presence Forms TQ Shortcode
 *
 * @package presence-forms
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Pf_Shortcode_Tq' ) ) {
	/**
	 * TQ Form Shortcode Page class
	 *
	 * @class Pf_Shortcode_Tq
	 */
	class Pf_Shortcode_Tq {

		/**
		 * Identifier of the form.
		 *
		 * @var string
		 */
		private string $id;

		/**
         * The URL to the THI form.
         *
		 * @var string|null
		 */
		private ?string $thi_form_url;

		/**
         * The name of the GET parameter that must be set when redirecting the user to the THI form.
         *
		 * @var string
		 */
		private string $tq_parameter_name;

		/**
		 * Pf_Shortcode_Tq constructor.
		 *
		 * @param array $atts {
		 *      Optional. Array of Widget parameters.
		 *
		 *      @type string    $id                     CSS ID of the widget, if empty a random ID will be assigned.
		 * }
		 */
		public function __construct( array $atts = array() ) {
			if ( key_exists( 'id', $atts ) && gettype( $atts['id'] ) == 'string' ) {
				$this->id = $atts['id'];
			} else {
				$this->id = uniqid();
			}

			if ( key_exists( 'tq_parameter_name', $atts ) && gettype( $atts['tq_parameter_name'] ) == 'string' ) {
				$this->tq_parameter_name = strval( $atts['tq_parameter_name'] );
			} else {
				$this->tq_parameter_name = 'tq-score';
			}

			if ( key_exists( 'thi_form_url', $atts ) && gettype( $atts['thi_form_url'] ) == 'string' ) {
				$this->thi_form_url = strval( $atts['thi_form_url'] );
			} else {
				$this->thi_form_url = null;
			}

			$this->include_styles_and_scripts();
		}

		/**
		 * Get the ID of this form.
		 *
		 * @return string
		 */
		public function get_id(): string {
			return $this->id;
		}

		/**
		 * Include all styles and scripts required for this form to work.
		 */
		public function include_styles_and_scripts(): void {
			wp_enqueue_style( 'pf-shortcode-tq-styles', PF_PLUGIN_URI . 'assets/presence-forms/css/pf-shortcode-tq-styles.css', array(), '1.0' );
			wp_enqueue_script( 'vuejs', 'https://unpkg.com/vue@3/dist/vue.global.prod.js', array(), 'latest' );
			wp_enqueue_script( 'pf-shortcode-common-scripts', PF_PLUGIN_URI . 'assets/presence-forms/js/common.js', array(), '1.0' );
			wp_enqueue_script( 'pf-shortcode-tq-scripts', PF_PLUGIN_URI . 'assets/presence-forms/js/pf-shortcode-tq-scripts.js', array( 'vuejs', 'pf-shortcode-common-scripts' ), '1.0', true );
			wp_localize_script( 'pf-shortcode-tq-scripts', 'pfShortcodeTqId', array( $this->get_id() ) );
		}

		/**
		 * Get the contents of the shortcode.
		 *
		 * @return false|string
		 */
		public function do_shortcode(): bool|string {
			ob_start(); ?>
				<div id="pf-shortcode-tq-container-<?php echo esc_attr( $this->id ); ?>" class="pf-container pf-shortcode-tq-container">
					<div v-for="question in questions" class="pf-question">
						<p><i v-if="question['selected'] !== 'default'" class="fa-solid fa-check pf-green"></i><i v-else class="fa-solid fa-times pf-red" style="margin-right: 2px;"></i> {{ question.question }}</p>
						<div class="pf-question-answers">
							<select v-model="question['selected']" style="display: none;">
								<option disabled value="default" selected>Selecteer een antwoord</option>
								<option v-for="[answer, points] of Object.entries(question.answers)" :value="points">{{ answer }}</option>
							</select>
							<button v-for="[answer, points] of Object.entries(question.answers)" :class="{'pf-selected': question['selected'] === points}" v-on:click="question['selected'] = points;">{{ answer }}</button>
						</div>
					</div>
					<div class="pf-result-container">
						<div v-if="score !== null" class="pf-tq-form-score">
							Je hebt <strong>{{ score }}</strong> gescoord op de test.
						</div>
						<div v-else class="pf-tq-form-not-filled-in">
							Beantwoord alle vragen om jouw score te zien.
						</div>
					</div>
					<template v-if="score !== null">
						<div v-if="score < 31" class="pf-result-summary">
							<p>
								Dit betekent dat je <strong>geen of zeer milde klachten</strong> ervaart van jouw tinnitus.
							</p>
							<p>
								Klik op onderstaande knop om de tweede vragenlijst in te vullen.
							</p>
						</div>
						<div v-else-if="score < 47" class="pf-result-summary">
							<p>
								Dit betekent dat je <strong>milde of middelmatige klachten</strong> ervaart van jouw
								tinnitus.
							</p>
							<p>
								Klik op onderstaande knop om de tweede vragenlijst in te vullen.
							</p>
						</div>
						<div v-else-if="score < 60" class="pf-result-summary">
							<p>
								Dit betekent dat je <strong>ernstige klachten</strong> ervaart van jouw tinnitus.
							</p>
							<p>
								Klik op onderstaande knop om de tweede vragenlijst in te vullen.
							</p>
						</div>
						<div v-else class="pf-result-summary">
							<p>
								Dit betekent dat je <strong>zeer ernstige klachten</strong> ervaart van jouw tinnitus.
							</p>
							<p>
								Klik op onderstaande knop om de tweede vragenlijst in te vullen.
							</p>
						</div>
						<div>
							<?php if ( ! is_null( $this->thi_form_url ) ) : ?>
								<button @click="eraseAndRedirect(`<?php echo esc_attr( $this->thi_form_url ); ?>?<?php echo esc_attr( $this->tq_parameter_name ); ?>=${this.score}`)" class="pf-tq-form-button">
									Klik om naar de volgende vragenlijst te gaan
								</button>
							<?php endif; ?>
						</div>
					</template>
				</div>
			<?php
			$ob_content = ob_get_contents();
			ob_end_clean();
			return $ob_content;
		}
	}
}
