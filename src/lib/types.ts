import type { Attachment } from 'airtable/lib/attachment';

export type SprechaktAct = {
	id: string;
	name: string;
	bio: string;
	image?: Attachment;
	instagram?: string;
	twitter?: string;
	youTube?: string;
};
export type SprechaktBlog = {
	id: string;
	author: string;
	body: string;
	shortDescription: string;
	status: string;
	title: string;
};

export type SprechaktEvent = {
	id: string;
	name: string;
	date: string;
	images?: readonly Attachment[];
	shortDescription?: string;
	description?: string;
};
