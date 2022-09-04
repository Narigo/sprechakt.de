import type { SprechAktBlog } from '$lib/types';
import head from '../head';

export function getFirstPosts(posts: SprechAktBlog[]) {
	return head(posts, 5);
}
