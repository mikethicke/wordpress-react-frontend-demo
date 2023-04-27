/**
 * Types for the Disciplinary Homes API
 */

export type ActivityItemData = {
	action: ActionType;
	deposit?: DepositData;
	group?: GroupData;
	member?: MemberData;
	post?: PostData;
	site?: SiteData;
	topic?: TopicData;
	discussion?: DiscussionData;
	preview?: string;
	organization?: string;
	time_since?: string; 
}

export type ActivityFeedData = {
	activity_feed: ActivityItemData[];
}

export enum ActionType {
	NEW_DEPOSIT = "new_deposit",
	NEW_POST    = "new_post",
	NEW_TOPIC   = "new_topic",
	REPLY_TOPIC = "reply_topic",
}

export type DepositData = {
	title: string;
	preview: string;
	link: string;
}

export type GroupData = {
	name: string;
	link: string;
}

export type MemberData = {
	name: string;
	profile: string;
	avatar: string;
}

export type PostData = {
	title: string;
	link: string;
}

export type SiteData = {
	name: string;
	link: string;
}

export type TopicData = {
	title: string;
	link: string;
}

export type DiscussionData = {
	name: string;
	link: string;
}