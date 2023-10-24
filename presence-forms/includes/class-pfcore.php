<?php
/**
 * Presence Forms Core
 *
 * @package presence-forms
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'PfCore' ) ) {
	/**
	 * Presence Forms core class.
	 *
	 * @class PfCore
	 */
	class PfCore {


		/**
		 * Plugin version
		 *
		 * @var string
		 */
		public string $version = '0.0.1';

		/**
		 * The single instance of the class
		 *
		 * @var PfCore|null
		 */
		private static ?PfCore $instance = null;

		/**
		 * Presence Forms Core
		 *
		 * Uses the Singleton pattern to load 1 instance of this class at maximum
		 *
		 * @static
		 * @return PfCore
		 */
		public static function instance(): PfCore {
			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor.
		 */
		private function __construct() {
			$this->define_constants();
			$this->actions_and_filters();
		}

		/**
		 * Define constants of the plugin.
		 */
		private function define_constants(): void {
			$this->define( 'PF_ABSPATH', dirname( PF_PLUGIN_FILE ) . '/' );
			$this->define( 'PF_FULLNAME', 'presence-forms' );
		}

		/**
		 * Define if not already set.
		 *
		 * @param string $name  the name.
		 * @param string $value the value.
		 */
		private static function define( string $name, string $value ): void {
			if ( ! defined( $name ) ) {
				define( $name, $value );
			}
		}

		/**
		 * Initialise Presence Forms Core.
		 */
		public function init(): void {
			$this->initialise_localisation();
			do_action( 'presence_forms_init' );
		}

		/**
		 * Initialise the localisation of the plugin.
		 */
		private function initialise_localisation(): void {
			load_plugin_textdomain( 'presence-forms', false, plugin_basename( dirname( PF_PLUGIN_FILE ) ) . '/languages/' );
		}

		/**
		 * Add pluggable support to functions.
		 */
		public function pluggable(): void {
			include_once PF_ABSPATH . 'includes/pf-functions.php';
		}

		/**
		 * Add actions and filters.
		 */
		private function actions_and_filters(): void {
			add_action( 'after_setup_theme', array( $this, 'pluggable' ) );
			add_action( 'init', array( $this, 'init' ) );
		}
	}
}
