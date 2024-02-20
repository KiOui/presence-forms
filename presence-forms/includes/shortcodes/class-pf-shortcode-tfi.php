<?php
/**
 * Presence Forms TFI Shortcode
 *
 * @package presence-forms
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Pf_Shortcode_Tfi' ) ) {
	/**
	 * TFI Form Shortcode Page class
	 *
	 * @class Pf_Shortcode_Tfi
	 */
	class Pf_Shortcode_Tfi {

		/**
		 * Identifier of the form.
		 *
		 * @var string
		 */
		private string $id;

		/**
		 * Optional URL to the TQ form that the user should be redirected to after this form.
		 *
		 * @var string|null
		 */
		private ?string $tq_form_url;

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
		 * Pf_Shortcode_Tfi constructor.
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
			wp_enqueue_style( 'pf-shortcode-tfi-styles', PF_PLUGIN_URI . 'assets/presence-forms/css/pf-shortcode-tfi-styles.css', array(), '1.0' );
			wp_enqueue_script( 'vuejs', 'https://unpkg.com/vue@3/dist/vue.global.prod.js', array(), 'latest' );
			wp_enqueue_script( 'pf-shortcode-common-scripts', PF_PLUGIN_URI . 'assets/presence-forms/js/common.js', array(), '1.0' );
			wp_enqueue_script( 'pf-shortcode-tfi-scripts', PF_PLUGIN_URI . 'assets/presence-forms/js/pf-shortcode-tfi-scripts.js', array( 'vuejs', 'pf-shortcode-common-scripts' ), '1.0', true );
			wp_localize_script( 'pf-shortcode-tfi-scripts', 'pfShortcodeTfiId', array( $this->get_id() ) );
		}

		/**
		 * Get the contents of the shortcode.
		 *
		 * @return false|string
		 */
		public function do_shortcode(): bool|string {
			ob_start(); ?>
			<div id="pf-shortcode-tfi-container-<?php echo esc_attr( $this->id ); ?>" class="pf-container pf-shortcode-tfi-container">
				<div v-for="question in questions" class="pf-question">
					<p><i v-if="question['selected'] !== 'default'" class="fa-solid fa-check pf-green"></i><i v-else class="fa-solid fa-times pf-red" style="margin-right: 2px;"></i> {{ question.question }}</p>
					<div v-if="question['type'] === 'range'" class="pf-question-answers pf-question-answers-range">
						<span><template v-if="question['selected'] !== 'default'">{{ question.selected }}<template v-if="question['value_postfix']">{{ question.value_postfix }}</template></template><template v-else>Verschuif het schuifje hieronder om jouw score aan te geven</template></span>
						<div class="slider">
							<input v-model="question['selected']" style="width: 100%" type="range" :min="question['min']" :max="question['max']" :step="question['step']"/>
						</div>
					</div>
					<div v-else class="pf-question-answers pf-question-answers-select">
						<select v-model="question['selected']" style="display: none;">
							<option disabled value="default" selected>Selecteer een antwoord</option>
							<option v-for="[answer, points] of Object.entries(question.answers)" :value="points">{{ answer }}</option>
						</select>
						<button v-for="[answer, points] of Object.entries(question.answers)" :class="{'pf-selected': question['selected'] === points}" v-on:click="question['selected'] = points;">{{ answer }}</button>
					</div>
					<div v-if="question.notes" class="pf-question-notes">
						<div v-if="question.notes.left" class="pf-question-notes-left">
							{{ question.notes.left }}
						</div>
						<div v-if="question.notes.right" class="pf-question-notes-right">
							{{ question.notes.right }}
						</div>
					</div>
				</div>
				<div class="pf-result-container">
					<div v-if="score !== null" class="pf-tfi-form-score">
						Je hebt <strong>{{ score }}</strong> gescoord op de test.
					</div>
					<div v-else class="pf-tfi-form-not-filled-in">
						Beantwoord alle vragen om jouw score te zien.
					</div>
				</div>
				<template v-if="score !== null">
					<div v-if="score <= 18" class="pf-result-summary">
						<p>
							Dit betekent dat je <strong>geen of zeer milde klachten</strong> ervaart van jouw tinnitus.
						</p>
						<?php if ( ! is_null( $this->text ) ) : ?>
							<p>
								<?php echo esc_html( $this->text ); ?>
							</p>
						<?php endif; ?>
					</div>
					<div v-else-if="score <= 42" class="pf-result-summary">
						<p>
							Dit betekent dat je <strong>matige</strong> ervaart van jouw
							tinnitus.
						</p>
						<?php if ( ! is_null( $this->text ) ) : ?>
							<p>
								<?php echo esc_html( $this->text ); ?>
							</p>
						<?php endif; ?>
					</div>
					<div v-else-if="score <= 65" class="pf-result-summary">
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
						<?php if ( ! is_null( $this->tq_form_url ) && ! is_null( $this->button_text ) ) : ?>
							<button @click="eraseAndRedirect(`<?php echo esc_attr( $this->tq_form_url ); ?>?<?php echo esc_attr( PFSettings::instance()->get_settings()->get_value( 'tfi_form_score_parameter_name' ) ); ?>=${this.score}`)" class="pf-tfi-form-button">
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
