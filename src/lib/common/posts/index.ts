import type { SprechaktBlog } from '$lib/types';
import head from '../head';

export function getFirstPosts(posts: SprechaktBlog[]) {
	return head(posts, 5);
}
