import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';

import { ActivityFeed } from '../../components/activity-feed/activity-feed';

import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } : any ) {
	const {
		maxItems
	} = attributes;
	
	return (
		<div { ...useBlockProps() } >
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'react-frontend-demo' ) }>
					<PanelRow>
						<TextControl
							label={ __( 'Max Activity Feed Items', 'react-frontend-demo' ) }
							value={ maxItems }
							onChange={ ( value ) => setAttributes( { maxItems: value } ) }
							type="number"
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<ActivityFeed
				maxItems = { maxItems }
			/>
		</div>
	);
}
