<?php
/**
 * Settings configuration
 *
 * @package presence-forms
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

include_once PF_ABSPATH . 'includes/settings/conditions/class-fieldssetsettingscondition.php';

if ( ! function_exists( 'pf_get_settings_config' ) ) {
	/**
	 * Get the settings config.
	 *
	 * @return array The settings config.
	 */
	function pf_get_settings_config(): array {
		return array(
			'group_name' => 'presence_forms_settings',
			'name' => 'presence_forms_settings',
			'settings' => array(
				array(
					'type'    => 'text',
					'id'      => 'tfi_form_score_parameter_name',
					'name'    => __( 'The GET parameter name of the parameter where the TFI score should be assigned to.', 'presence-forms' ),
					'can_be_null' => false,
					'default' => 'tfi-score',
					'hint'    => __( 'When a score is calculated, a user will be redirected to a new page with this GET parameter set to the score the user had.', 'presence-forms' ),
				),
				array(
					'type'    => 'text',
					'id'      => 'tq_form_score_parameter_name',
					'name'    => __( 'The GET parameter name of the parameter where the TQ score should be assigned to.', 'presence-forms' ),
					'can_be_null' => false,
					'default' => 'tq-score',
					'hint'    => __( 'When a score is calculated, a user will be redirected to a new page with this GET parameter set to the score the user had.', 'presence-forms' ),
				),
				array(
					'type'    => 'text',
					'id'      => 'thi_form_score_parameter_name',
					'name'    => __( 'The GET parameter name of the parameter where the THI score should be assigned to.', 'presence-forms' ),
					'can_be_null' => false,
					'default' => 'thi-score',
					'hint'    => __( 'When a score is calculated, a user will be redirected to a new page with this GET parameter set to the score the user had. This should be different from the TQ GET parameter.', 'presence-forms' ),
				),
			),
		);
	}
}

if ( ! function_exists( 'pf_get_settings_screen_config' ) ) {
	/**
	 * Get the settings screen config.
	 *
	 * @return array The settings screen config.
	 */
	function pf_get_settings_screen_config(): array {
		return array(
			'page_title'        => esc_html__( 'Presence Forms', 'presence-forms' ),
			'menu_title'        => esc_html__( 'Presence Forms', 'presence-forms' ),
			'capability_needed' => 'edit_plugins',
			'menu_slug'         => 'pf_admin_menu',
			'icon'              => 'dashicons-editor-ul',
			'position'          => 56,
			'settings_pages' => array(
				array(
					'page_title'        => esc_html__( 'Presence Forms Dashboard', 'presence-forms' ),
					'menu_title'        => esc_html__( 'Dashboard', 'presence-forms' ),
					'capability_needed' => 'edit_plugins',
					'menu_slug'         => 'pf_admin_menu',
					'renderer'          => function () {
						include_once PF_ABSPATH . 'views/presence-forms-dashboard-view.php';
					},
					'settings_sections' => array(
						array(
							'id'       => 'tfi_form',
							'name'     => __( 'TFI Form', 'presence-forms' ),
							'settings' => array(
								'tfi_form_score_parameter_name',
							),
						),
						array(
							'id'       => 'tq_form',
							'name'     => __( 'TQ Form', 'presence-forms' ),
							'settings' => array(
								'tq_form_score_parameter_name',
							),
						),
						array(
							'id'       => 'thi_form',
							'name'     => __( 'THI Form', 'presence-forms' ),
							'settings' => array(
								'thi_form_score_parameter_name',
							),
						),
					),
				),
			),
		);
	}
}
