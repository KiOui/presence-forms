<?php
/**
 * Print admin dashboard
 *
 * @package presence-forms
 */

?>
<div class="wrap">
	<h1 class="wp-heading-inline"><?php esc_html_e( 'Presence Forms Dashboard', 'presence-forms' ); ?></h1>
	<hr class="wp-header-end">
	<p><?php esc_html_e( 'Presence Forms settings', 'presence-forms' ); ?></p>
	<form action='/wp-admin/admin.php?page=pf_admin_menu' method='post'>
		<?php
		settings_fields( 'presence_forms_settings' );
		do_settings_sections( 'pf_admin_menu' );
		submit_button();
		?>
	</form>
</div>
