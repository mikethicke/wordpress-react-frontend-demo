<?php
/**
 * Plugin Name:       React Frontend Demo
 * Description:       Example block with React frontend.
 * Requires at least: 6.2
 * Requires PHP:      8.2
 * Version:           0.1.0
 * Author:            Mike Thicke
 * License:           MIT
 * Text Domain:       react-frontend-demo
 *
 * @package           MikeThicke\react-frontend-demo
 */

namespace MikeThicke\ReactFrontendDemo;

use MikeThicke\ReactFrontendDemo\Rest\DisciplinaryHomesController;

/**
 * Composer autoloader.
 * 
 * @see https://getcomposer.org/doc/01-basic-usage.md#autoloading
 * @see https://anchor.host/composer-autoloading-within-wordpress-plugin/
 */
require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function block_init() {
	register_block_type( __DIR__ . '/build/alert-button' );
	register_block_type( __DIR__ . '/build/activity-feed' );
}
add_action( 'init', __NAMESPACE__ . '\block_init' );

/**
 * Enqueues block frontend assets.
 */
function frontend_enqueue() {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/alert-button/front.asset.php';
	wp_enqueue_script(
		'react-frontend-demo-alert',
		plugins_url( 'build/alert-button/front.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	// Load styles from WordPress components.
	wp_enqueue_style(
		'wordpress-components-styles',
		includes_url( '/css/dist/components/style.min.css' )
	);
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\frontend_enqueue' );

/**
 * Register REST routes.
 */
function register_rest_routes() {
	$controller = new DisciplinaryHomesController();
	$controller->register_routes();
}
add_action( 'rest_api_init', __NAMESPACE__ . '\register_rest_routes' );