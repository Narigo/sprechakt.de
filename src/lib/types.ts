export type Image = {
	filename: string;
	height: number;
	id: string;
	pathInAssets: string;
	type: string;
	width: number;
};

export type SprechAktImage = {
	id: string;
	acts?: unknown;
	alt: string;
	credits?: string;
	images: Image[];
	route: string;
	title: string;
};

export type SprechAktAct = {
	id: string;
	name: string;
	bio: string;
	facebook?: string;
	homepage?: string;
	image?: Image;
	instagram?: string;
	twitter?: string;
	userTypes?: ('feature' | 'poet' | 'team')[];
	youTube?: string;
};

export type SprechAktBlog = {
	id: string;
	authors: string[];
	authorFallback?: string;
	body: string;
	date: string;
	shortDescription: string;
	status: string;
	title: string;
};

export type SprechAktEvent = {
	id: string;
	name: string;
	date: string;
	images?: Image[];
	shortDescription?: string;
	description?: string;
};
