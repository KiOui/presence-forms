<?php
/**
 * Presence Forms THI Shortcode
 *
 * @package presence-forms
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Pf_Shortcode_Thi' ) ) {
	/**
	 * THI Form Shortcode Page class
	 *
	 * @class Pf_Shortcode_Thi
	 */
	class Pf_Shortcode_Thi {

		/**
		 * Identifier of the form.
		 *
		 * @var string
		 */
		private string $id;

		/**
		 * Optional URL to redirect the user to if the $tq_parameter_name does not have a value.
		 *
		 * @var string|null
		 */
		private ?string $tq_form_url;

		/**
		 * Optional URL to the contact form that the user should be redirected to after this form.
		 *
		 * @var string|null
		 */
		private ?string $contact_form_url;

		/**
		 * The text to be shown on the button once the form is filled in.
		 *
		 * @var string|null
		 */
		private ?string $button_text;

		/**
		 * The text to be shown under the score once the form is filled in.
		 *
		 * @var string|null
		 */
		private ?string $text;

		/**
		 * Pf_Shortcode_Thi constructor.
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

			if ( key_exists( 'tq_form_url', $atts ) && gettype( $atts['tq_form_url'] ) == 'string' ) {
				$this->tq_form_url = strval( $atts['tq_form_url'] );
			} else {
				$this->tq_form_url = null;
			}

			if ( key_exists( 'contact_form_url', $atts ) && gettype( $atts['contact_form_url'] ) == 'string' ) {
				$this->contact_form_url = strval( $atts['contact_form_url'] );
			} else {
				$this->contact_form_url = null;
			}

			if ( key_exists( 'button_text', $atts ) && gettype( $atts['button_text'] ) == 'string' ) {
				$this->button_text = strval( $atts['button_text'] );
			} else {
				$this->button_text = null;
			}

			if ( key_exists( 'text', $atts ) && gettype( $atts['text'] ) == 'string' ) {
				$this->text = strval( $atts['text'] );
			} else {
				$this->text = null;
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
			wp_enqueue_style( 'pf-shortcode-thi-styles', PF_PLUGIN_URI . 'assets/presence-forms/css/pf-shortcode-thi-styles.css', array(), '1.0' );
			wp_enqueue_script( 'vuejs', 'https://unpkg.com/vue@3/dist/vue.global.prod.js', array(), 'latest' );
			wp_enqueue_script( 'pf-shortcode-common-scripts', PF_PLUGIN_URI . 'assets/presence-forms/js/common.js', array(), '1.0' );
			wp_enqueue_script( 'pf-shortcode-thi-scripts', PF_PLUGIN_URI . 'assets/presence-forms/js/pf-shortcode-thi-scripts.js', array( 'vuejs', 'pf-shortcode-common-scripts' ), '1.0', true );
			wp_localize_script( 'pf-shortcode-thi-scripts', 'pfShortcodeThiId', array( $this->get_id() ) );
		}

		/**
		 * Get the contents of the shortcode.
		 *
		 * @return false|string
		 */
		public function do_shortcode(): bool|string {
			$tq_form_score_parameter_name = PFSettings::instance()->get_settings()->get_value( 'tq_form_score_parameter_name' );
			$tq_form_value = isset( $_GET[ $tq_form_score_parameter_name ] ) ? intval( $_GET[ $tq_form_score_parameter_name ] ) : 0;

			$tfi_form_score_parameter_name = PFSettings::instance()->get_settings()->get_value( 'tfi_form_score_parameter_name' );
			$tfi_form_value = isset( $_GET[ $tfi_form_score_parameter_name ] ) ? intval( $_GET[ $tfi_form_score_parameter_name ] ) : 0;
			ob_start(); ?>
				<script>
					const TQ_FORM_VALUE = <?php echo esc_attr( $tq_form_value ); ?>;
					const TFI_FORM_VALUE = <?php echo esc_attr( $tfi_form_value ); ?>;
				</script>
				<div id="pf-shortcode-thi-container-<?php echo esc_attr( $this->id ); ?>" class="pf-container pf-shortcode-thi-container">
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
						<div v-if="score !== null" class="pf-thi-form-score">
							Je hebt <strong>{{ score }}</strong> gescoord op de test.
						</div>
						<div v-else class="pf-thi-form-not-filled-in">
							Beantwoord alle vragen om jouw score te zien.
						</div>
					</div>
					<template v-if="score !== null">
						<div v-if="score < 17" class="pf-result-summary">
							<p>
								Dit betekent dat je <strong>geen of zeer milde klachten</strong> ervaart van jouw tinnitus.
							</p>
							<?php if ( ! is_null( $this->text ) ) : ?>
								<p>
									<?php echo esc_html( $this->text ); ?>
								</p>
							<?php endif; ?>
						</div>
						<div v-else-if="score < 37" class="pf-result-summary">
							<p>
								Dit betekent dat je <strong>milde of middelmatige klachten</strong> ervaart van jouw
								tinnitus.
							</p>
							<?php if ( ! is_null( $this->text ) ) : ?>
								<p>
									<?php echo esc_html( $this->text ); ?>
								</p>
							<?php endif; ?>
						</div>
						<div v-else-if="score < 57" class="pf-result-summary">
							<p>
								Dit betekent dat je <strong>matige klachten</strong> ervaart van jouw tinnitus.
							</p>
							<?php if ( ! is_null( $this->text ) ) : ?>
								<p>
									<?php echo esc_html( $this->text ); ?>
								</p>
							<?php endif; ?>
						</div>
						<div v-else-if="score < 77" class="pf-result-summary">
							<p>
								Dit betekent dat je <strong>ernstige klachten</strong> ervaart van jouw tinnitus.
							</p>
							<?php if ( ! is_null( $this->text ) ) : ?>
								<p>
									<?php echo esc_html( $this->text ); ?>
								</p>
							<?php endif; ?>
						</div>
						<div v-else class="pf-result-summary">
							<p>
								Dit betekent dat je <strong>zeer ernstige klachten</strong> ervaart van jouw tinnitus.
							</p>
							<?php if ( ! is_null( $this->text ) ) : ?>
								<p>
									<?php echo esc_html( $this->text ); ?>
								</p>
							<?php endif; ?>
						</div>
						<div>
							<?php if ( ! is_null( $this->contact_form_url ) && ! is_null( $this->button_text ) ) : ?>
								<button @click="eraseAndRedirect(`<?php echo esc_attr( $this->contact_form_url ); ?>?<?php echo esc_attr( PFSettings::instance()->get_settings()->get_value( 'thi_form_score_parameter_name' ) ); ?>=${this.score}&<?php echo esc_attr( PFSettings::instance()->get_settings()->get_value( 'tfi_form_score_parameter_name' ) ); ?>=${this.tfi_form_value}&<?php echo esc_attr( PFSettings::instance()->get_settings()->get_value( 'tq_form_score_parameter_name' ) ); ?>=${this.tq_form_value}`)" class="pf-thi-form-button">
									<?php echo esc_html( $this->button_text ); ?>
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
