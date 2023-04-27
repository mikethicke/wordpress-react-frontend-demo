import { hydrateRoot } from '@wordpress/element';
import { AlertButton } from '../../components/alert-button/alert-button';

window.addEventListener( 'DOMContentLoaded', () => {
	const alert_buttons = document.querySelectorAll( '.wp-block-mikethicke-react-frontend-alert-block' );
	Array.from( alert_buttons ).forEach( alert_button => {
		const attribuesJSON = (alert_button as HTMLElement).dataset.attributes;
		const attributes = JSON.parse( attribuesJSON ? attribuesJSON : '{}' );
		hydrateRoot( 
			alert_button, 
			<AlertButton
				buttonText = { attributes.buttonText }
				alertText = { attributes.alertText }
			/>
		);
	} );
} );