import { useBlockProps } from '@wordpress/block-editor';
import { AlertButton } from '../../components/alert-button';

export default function Save( { attributes } ) {
	return (
		<div 
			{ ...useBlockProps.save() } 
			data-attributes = { JSON.stringify( attributes ) }
		>
			<AlertButton.Content
				buttonText = { attributes.buttonText }
				alertText = { attributes.alertText }
			/>
		</div>
	);
}