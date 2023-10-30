<?php
/**
 * Settings Configuration Exception.
 *
 * @package presence-forms
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'SettingsConfigurationException' ) ) {
	/**
	 * Settings Configuration Exception.
	 *
	 * @class SettingsConfigurationException
	 */
	class SettingsConfigurationException extends Exception {

	}
}
