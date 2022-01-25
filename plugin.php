<?php
/*
    Plugin Name: Custom banner
    Description: Custom banner block for gutenberg editor
    Version 1.0
    Author: vladmasliuk@gmail.com
*/

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
