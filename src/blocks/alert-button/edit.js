import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';

import { AlertButton } from '../../components/alert-button';

import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const {
		buttonText,
		alertText
	} = attributes;
	
	return (
		<div { ...useBlockProps() } >
			<AlertButton
				buttonText = { buttonText }
				alertText = { alertText }
			/>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'react-frontend-demo' ) }>
					<PanelRow>
						<TextControl
							label={ __( 'Button Text', 'react-frontend-demo' ) }
							value={ buttonText }
							onChange={ ( value ) => setAttributes( { buttonText: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ __( 'Alert Text', 'react-frontend-demo' ) }
							value={ alertText }
							onChange={ ( value ) => setAttributes( { alertText: value } ) }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
