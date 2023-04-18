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
 * @package           react-frontend-demo
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block__block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block__block_init' );
