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
		public string $version = '1.0.0';

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
			$this->add_shortcodes();
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
		 * Add the Tinnitus forms post type and Tinnitus forms Category type.
		 */
		public function add_post_type(): void {
			register_post_type(
				'tinnitus_entries',
				array(
					'label' => __( 'Tinnitus Form Entries', 'presence-forms' ),
					'labels' => array(
						'name' => __( 'Tinnitus Form Entries', 'presence-forms' ),
						'singular_name' => __( 'TTinnitus Form Entry', 'presence-forms' ),
						'add_new' => __( 'Add New', 'presence-forms' ),
						'add_new_item' => __( 'Add New Tinnitus Form Entry', 'presence-forms' ),
						'edit_item' => __( 'Edit Tinnitus Form Entry', 'presence-forms' ),
						'new_item' => __( 'New Tinnitus form entry', 'presence-forms' ),
						'view_item' => __( 'View Tinnitus Form Entry', 'presence-forms' ),
						'view_items' => __( 'View Tinnitus Form Entries', 'presence-forms' ),
						'search_items' => __( 'Search Tinnitus form entries', 'presence-forms' ),
						'not_found' => __( 'No tinnitus form entries found', 'presence-forms' ),
						'not_found_in_trash' => __( 'No Tinnitus form entries found in trash', 'presence-forms' ),
						'parent_item_colon' => __( 'Parent Tinnitus form entry', 'presence-forms' ),
						'all_items' => __( 'All Tinnitus form entries', 'presence-forms' ),
						'archives' => __( 'Tinnitus form entry Archives', 'presence-forms' ),
						'attributes' => __( 'Tinnitus form entry Attributes', 'presence-forms' ),
						'insert_into_item' => __( 'Insert into tinnitus form entry', 'presence-forms' ),
						'uploaded_to_this_item' => __( 'Uploaded to this Tinnitus form entry', 'presence-forms' ),
						'featured_image' => __( 'Tinnitus form entry image', 'presence-forms' ),
						'set_featured_image' => __( 'Set featured image', 'presence-forms' ),
						'remove_featured_image' => __( 'Remove featured image', 'presence-forms' ),
						'use_featured_image' => __( 'Use as featured image', 'presence-forms' ),
						'menu_name' => __( 'Tinnitus form entries', 'presence-forms' ),
						'filter_items_list' => __( 'Filter Tinnitus form entry list', 'presence-forms' ),
						'filter_by_date' => __( 'Filter by date', 'presence-forms' ),
						'items_list_navigation' => __( 'Tinnitus form entries list navigation', 'presence-forms' ),
						'items_list' => __( 'Tinnitus form entries list', 'presence-forms' ),
						'item_published' => __( 'Tinnitus form entry published', 'presence-forms' ),
						'item_published_privately' => __( 'Tinnitus form entry published privately', 'presence-forms' ),
						'item_reverted_to_draft' => __( 'Tinnitus form entry reverted to draft', 'presence-forms' ),
						'item_scheduled' => __( 'Tinnitus form entry scheduled', 'presence-forms' ),
						'item_updated' => __( 'Tinnitus form entry updated', 'presence-forms' ),
					),
					'description' => __( 'Tinnitus form entry post type', 'presence-forms' ),
					'public' => true,
					'hierarchical' => false,
					'exclude_from_search' => true,
					'publicly_queryable' => false,
					'show_ui' => true,
					'show_in_menu' => true,
					'show_in_nav_menus' => false,
					'show_in_admin_bar' => true,
					'show_in_rest' => true,
					'menu_position' => 56,
					'menu_icon' => 'dashicons-forms',
					'taxonomies' => array(),
					'has_archive' => false,
					'can_export' => true,
					'delete_with_user' => false,
				)
			);
			remove_post_type_support( 'widcol_text_sliders', 'editor' );
			add_post_type_support( 'widcol_text_sliders', 'thumbnail' );
			register_taxonomy(
				'widcol_text_sliders_category',
				'widcol_text_sliders',
				array(
					'labels' => array(
						'name' => __( 'Tinnitus form Categories', 'presence-forms' ),
						'singular_name' => __( 'Tinnitus form Category', 'presence-forms' ),
						'search_items' => __( 'Tinnitus Form Categories', 'presence-forms' ),
						'popular_items' => __( 'Popular Tinnitus form Categories', 'presence-forms' ),
						'all_items' => __( 'All Tinnitus form Categories', 'presence-forms' ),
						'parent_item' => __( 'Parent Tinnitus form Category', 'presence-forms' ),
						'parent_item_colon' => __( 'Parent Tinnitus form Category:', 'presence-forms' ),
						'edit_item' => __( 'Edit Tinnitus form Category', 'presence-forms' ),
						'view_item' => __( 'View Tinnitus form Category', 'presence-forms' ),
						'update_item' => __( 'Update Tinnitus form Category', 'presence-forms' ),
						'add_new_item' => __( 'Add New Tinnitus form Category', 'presence-forms' ),
						'new_item_name' => __( 'New Tinnitus form Category Name', 'presence-forms' ),
						'separate_items_with_commas' => __( 'Separate Tinnitus form Categories with commas', 'presence-forms' ),
						'add_or_remove_items' => __( 'Add or remove tinnitus form categories', 'presence-forms' ),
						'choose_from_most_used' => __( 'Choose from the most used tinnitus form categories', 'presence-forms' ),
						'not_found' => __( 'No tinnitus form categories found', 'presence-forms' ),
						'no_terms' => __( 'No tinnitus form categories', 'presence-forms' ),
						'filter_by_item' => __( 'Filter by tinnitus form category', 'presence-forms' ),
					),
					'description' => __( 'Tinnitus form Categories', 'presence-forms' ),
					'public' => false,
					'publicly_queryable' => false,
					'hierarchical' => false,
					'show_ui' => true,
					'show_in_menu' => true,
					'show_in_nav_menus' => false,
					'show_in_rest' => false,
					'show_tagcloud' => false,
					'show_in_quick_edit' => true,
					'show_admin_column' => true,
				)
			);
		}

		/**
		 * Add meta box support.
		 */
		public function add_meta_box_support(): void {
			include_once PF_ABSPATH . '/includes/metaboxes/class-metabox.php';
			new Metabox(
				'tinnitus_entries_metabox',
				array(
					array(
						'label' => __( 'First name', 'presence-forms' ),
						'desc'  => __( 'First name of the person that filled in the Tinnitus form', 'presence-forms' ),
						'id'    => 'pf_tinnitus_entries_first_name',
						'type'  => 'text',
					),
					array(
						'label' => __( 'Last name', 'presence-forms' ),
						'desc'  => __( 'Last name of the person that filled in the Tinnitus form', 'presence-forms' ),
						'id'    => 'pf_tinnitus_entries_last_name',
						'type'  => 'text',
					),
					array(
						'label' => __( 'E-mail address', 'presence-forms' ),
						'desc'  => __( 'E-mail address of the person that filled in the Tinnitus form', 'presence-forms' ),
						'id'    => 'pf_tinnitus_entries_email_address',
						'type'  => 'text',
					),
					array(
						'label' => __( 'Phone number', 'presence-forms' ),
						'desc'  => __( 'Phone number of the person that filled in the Tinnitus form', 'presence-forms' ),
						'id'    => 'pf_tinnitus_entries_phone_number',
						'type'  => 'text',
					),
					array(
						'label' => __( 'Tinnitus test', 'presence-forms' ),
						'desc'  => __( 'Filled in tinnitus test type', 'presence-forms' ),
						'id'    => 'pf_tinnitus_entries_tinnitus_test_type',
						'type'  => 'text',
					),
					array(
						'label' => __( 'Tinnitus form score', 'presence-forms' ),
						'desc'  => __( 'Total score of the Tinnitus form entry', 'presence-forms' ),
						'id'    => 'pf_tinnitus_entries_score',
						'type'  => 'int',
					),
				),
				'tinnitus_entries',
				__( 'Tinnitus form entry settings' )
			);
		}

		/**
		 * Add actions and filters.
		 */
		private function actions_and_filters(): void {
			add_action( 'after_setup_theme', array( $this, 'pluggable' ) );
			add_action( 'init', array( $this, 'init' ) );
		}

		/**
		 * Add the Form shortcodes.
		 */
		public function add_shortcodes(): void {
			add_shortcode( 'pf_form_tq', array( $this, 'do_shortcode_tq_form' ) );
			add_shortcode( 'pf_form_thi', array( $this, 'do_shortcode_thi_form' ) );
		}

		/**
		 * Do the shortcode of a TQ form.
		 *
		 * @param $atts
		 * @return false|string
		 */
		public function do_shortcode_tq_form( $atts ): bool|string {
			if ( gettype( $atts ) != 'array' ) {
				$atts = array();
			}

			include_once PF_ABSPATH . 'includes/shortcodes/class-pf-shortcode-tq.php';
			$shortcode = new Pf_Shortcode_Tq( $atts );
			return $shortcode->do_shortcode();
		}

		/**
		 * Do the shortcode of a THI form.
		 *
		 * @param $atts
		 * @return false|string
		 */
		public function do_shortcode_thi_form( $atts ): bool|string {
			if ( gettype( $atts ) != 'array' ) {
				$atts = array();
			}

			include_once PF_ABSPATH . 'includes/shortcodes/class-pf-shortcode-thi.php';
			$shortcode = new Pf_Shortcode_Tq( $atts );
			return $shortcode->do_shortcode();
		}
	}
}
