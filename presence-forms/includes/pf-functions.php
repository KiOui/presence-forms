<?php
/**
 * Presence Forms functions
 *
 * @package presence-forms
 */

if ( ! class_exists( 'pf_check_redirect' ) ) {
	/**
	 * Check whether a redirect should be issued for pages including the THI form.
	 *
	 * @return void
	 */
	function pf_check_redirect(): void {
		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- We only check for inclusion.
		if ( ! is_admin() && ( ! isset( $_SERVER['REQUEST_URI'] ) || ! str_contains( wp_unslash( $_SERVER['REQUEST_URI'] ), 'elementor' ) ) ) {
			global $post;
			$tq_form_score_parameter_name = PFSettings::instance()->get_settings()->get_value( 'tq_form_score_parameter_name' );
			if ( has_shortcode( $post->post_content, 'pf_form_thi' ) && ! isset( $_GET[ $tq_form_score_parameter_name ] ) ) {
				$tq_form_url = PFSettings::instance()->get_settings()->get_value( 'tq_form_url' );
				nocache_headers();
				if ( is_null( $tq_form_url ) ) {
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- This is a redirect.
					exit( wp_safe_redirect( '/' ) );
				} else {
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- This is a redirect.
					exit( wp_safe_redirect( $tq_form_url ) );
				}
			}
		}
	}
}
