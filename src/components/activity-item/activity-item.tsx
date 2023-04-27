import { ActivityItemData, ActionType } from "../../api.d";

import './style.scss';

interface MetaData {
	title?: string;
	link?: string;
	content?: string;
}

export const ActivityItem = ( item: ActivityItemData ) => {

	const itemMetadata : MetaData = {};
	
	// This is painful. Probably want to rethink the API schema.
	switch ( item.action ) {
		case ActionType.NEW_DEPOSIT :
			itemMetadata.title = item.deposit?.title;
			itemMetadata.link = item.deposit?.link;
			itemMetadata.content = item.deposit?.preview;
			break;
		case ActionType.NEW_POST :
			itemMetadata.title = item.post?.title;
			itemMetadata.link = item.post?.link;
			itemMetadata.content = item.preview;
			break;
		case ActionType.NEW_TOPIC :
		case ActionType.REPLY_TOPIC :
			itemMetadata.title = item.topic?.title;
			itemMetadata.link = item.topic?.link;
			itemMetadata.content = item.preview;
			break;
		default:
			itemMetadata.title = '';
			itemMetadata.link = '';
			itemMetadata.content = '';
	}

	return (
		<div className="activity-item">
			<div className="activity-item__header">
				<a href="{ itemMetadata.link }" className="activity-item__header__link">
					<div className="activity-item__header__title">
						{ itemMetadata.title }
					</div>
				</a>
			</div>
			<div className="activity-item__content">
				{ itemMetadata.content }
			</div>
		</div>
	);
}