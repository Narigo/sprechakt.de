import type { Attachment } from 'airtable/lib/attachment';

export type SprechAktAct = {
	id: string;
	name: string;
	bio: string;
	facebook?: string;
	homepage?: string;
	image?: Attachment;
	instagram?: string;
	twitter?: string;
	youTube?: string;
};

export type SprechAktBlog = {
	id: string;
	authors: string[];
	body: string;
	shortDescription: string;
	status: string;
	title: string;
};

export type SprechAktEvent = {
	id: string;
	name: string;
	date: string;
	images?: readonly Attachment[];
	shortDescription?: string;
	description?: string;
};
