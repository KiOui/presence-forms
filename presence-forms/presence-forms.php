<?php
/**
 * Plugin Name: Presence Forms
 * Description: A plugin for implementing custom scoring forms for Presence Coach.
 * Plugin URI: https://github.com/KiOui/presence-forms
 * Version: 2.0.0
 * Author: Lars van Rhijn
 * Author URI: https://larsvanrhijn.nl/
 * Text Domain: presence-forms
 * Domain Path: /languages/
 *
 * @package presence-forms
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'PF_PLUGIN_FILE' ) ) {
	define( 'PF_PLUGIN_FILE', __FILE__ );
}
if ( ! defined( 'PF_PLUGIN_URI' ) ) {
	define( 'PF_PLUGIN_URI', plugin_dir_url( __FILE__ ) );
}

require_once ABSPATH . 'wp-admin/includes/plugin.php';

include_once __DIR__ . '/includes/class-pfcore.php';
$GLOBALS['PfCore'] = PfCore::instance();
