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
			'group_name' => 'autotelex_automotive_settings',
			'name' => 'autotelex_automotive_settings',
			'settings' => array(
				array(
					'type'    => 'int',
					'id'      => 'delete_entries_after',
					'name'    => __( 'Delete entries after days', 'presence-forms' ),
					'can_be_null' => null,
					'hint'    => __( 'How many days should pass after which an entry is deleted. If no value is given entries will never be deleted.', 'presence-forms' ),
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
							'id'       => 'data_protection',
							'name'     => __( 'Data Protection', 'presence-forms' ),
							'settings' => array(
								'authentication_settings_username',
								'authentication_settings_password',
							),
						),
					),
				),
			),
		);
	}
}
