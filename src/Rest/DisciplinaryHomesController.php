<?php
/**
 * Controller class for disciplinary home page.
 *
 * Registers the following routes:
 * - /disciplinary-home (GET) - Returns the disciplinary home page data.
 *
 * @see https://developer.wordpress.org/rest-api/extending-the-rest-api/
 *
 * Note: this example is not implementing any schema validation or error
 * handling. For a simple endpoint this might be fine, but in general it is best
 * practice to implent these.
 *
 * @package MikeThicke\remote-frontend-demo
 */

namespace MikeThicke\ReactFrontendDemo\Rest;

class DisciplinaryHomesController extends \WP_REST_Controller {
	
	/**
	 * The namespace of this controller's route.
	 *
	 * @var string
	 */
	protected $namespace;

	/**
	 * The base of this controller's route.
	 *
	 * @var string
	 */
	protected $rest_base;

	/**
	 * The data for the disciplinary home page.
	 *
	 * @var array
	 */
	protected $data;

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->namespace = 'react-frontend-demo/v1';
		$this->rest_base = 'disciplinary-home';
		$this->data      = $this->parse_sample_data();
	}

	/**
	 * Registers routes for this controller.
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base,
			[
				'methods'  => \WP_REST_Server::READABLE,
				'permission_callback' => [ $this, 'get_items_permissions_check' ],
				'callback' => [ $this, 'get_disciplinary_home' ],
			]
		);
	}

	/**
	 * Returns the disciplinary home page data.
	 *
	 * @param \WP_REST_Request $request The request object.
	 * @return \WP_REST_Response
	 */
	public function get_disciplinary_home( \WP_REST_Request $request ) {
		return rest_ensure_response( $this->data );
	}

	public function get_items_permissions_check($request)
	{
		return true;
	}

	private function parse_sample_data() {
		$sample_data = file_get_contents( plugin_dir_path( __FILE__ ) . 'sample-data.json' );
		return json_decode( $sample_data, true );
	}
}