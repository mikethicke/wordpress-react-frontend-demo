import { hydrateRoot } from '@wordpress/element';
import { ActivityFeed } from '../../components/activity-feed/activity-feed';

window.addEventListener( 'DOMContentLoaded', () => {
	const activityFeeds = document.querySelectorAll( '.wp-block-mikethicke-react-frontend-activity-feed-block' );
	Array.from( activityFeeds ).forEach( activityFeed => {
		const attribuesJSON = (activityFeed as HTMLElement).dataset.attributes;
		const attributes = JSON.parse( attribuesJSON ? attribuesJSON : '{}' );
		hydrateRoot( 
			activityFeed, 
			<ActivityFeed
				maxItems = { attributes.maxItems }
			/>
		);
	} );
} );