import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

export const AlertButton = props => {
	const {
		buttonText,
		alertText
	} = props;

	return (
		<Button
			variant = "primary"
			onClick = { () => { alert( alertText ? alertText : __( 'You clicked me!', 'react-frontend-demo' ) ); } }
		>
			{ buttonText ? buttonText : __( 'Click Me', 'react-frontend-demo' ) }
		</Button>
	);
};

AlertButton.Content = props => {
	const {
		buttonText,
		alertText
	} = props;

	return (
		<button
			className='components-button is-primary'
			onClick = { () => { alert( alertText ? alertText : __( 'You clicked me!', 'react-frontend-demo' ) ); } }
		>
			{ buttonText ? buttonText : __( 'Click Me', 'react-frontend-demo' ) }
		</button>
	);
}