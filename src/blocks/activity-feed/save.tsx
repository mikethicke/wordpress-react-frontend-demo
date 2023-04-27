import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } : any ) {
	// Just saving a blank div for now. Probably want to have some kind of
	// loading placeholder? Or could do server-side rendering?
	return (
		<div 
			{ ...useBlockProps.save() } 
			data-attributes = { JSON.stringify( attributes ) }
		>
		</div>
	);
}