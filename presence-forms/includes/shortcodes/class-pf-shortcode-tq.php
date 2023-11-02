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
	 * Testimonials Shortcode Page class
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
		 * WidgetsCollectionTestimonialsShortcode constructor.
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
			$this->include_styles_and_scripts();
		}

		/**
		 * Get the ID of this slider.
		 *
		 * @return string
		 */
		public function get_id(): string {
			return $this->id;
		}

		/**
		 * Include all styles and scripts required for this slider to work.
		 */
		public function include_styles_and_scripts(): void {
			wp_enqueue_style( 'pf-shortcode-tq-styles', PF_PLUGIN_URI . 'assets/presence-forms/css/pf-shortcode-tq-styles.css', array(), '1.0' );
			wp_enqueue_script( 'vuejs', 'https://unpkg.com/vue@3/dist/vue.global.prod.js', array(), 'latest' );
			wp_enqueue_script( 'pf-shortcode-tq-scripts', PF_PLUGIN_URI . 'assets/presence-forms/js/pf-shortcode-tq-scripts.js', array( 'vuejs' ), '1.0', true );
			wp_localize_script( 'pf-shortcode-tq-scripts', 'pfShortcodeTqId', $this->get_id() );
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
						<div v-if="score !== null">
							Je hebt {{ score }} gescoord op de test.
						</div>
						<div v-else>
							Beantwoord alle vragen om jouw score te zien.
						</div>
					</div>
				</div>
			<?php
			$ob_content = ob_get_contents();
			ob_end_clean();
			return $ob_content;
		}
	}
}
