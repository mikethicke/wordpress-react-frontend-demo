import { hydrateRoot } from '@wordpress/element';
import { AlertButton } from '../../components/alert-button';

window.addEventListener( 'DOMContentLoaded', () => {
	const alert_buttons = document.querySelectorAll( '.wp-block-mikethicke-react-frontend-alert-block' );
	Array.from( alert_buttons ).forEach( alert_button => {
		const attributes = JSON.parse( alert_button.dataset.attributes );
		hydrateRoot( 
			alert_button, 
			<AlertButton
				buttonText = { attributes.buttonText }
				alertText = { attributes.alertText }
			/>
		);
	} );
} );