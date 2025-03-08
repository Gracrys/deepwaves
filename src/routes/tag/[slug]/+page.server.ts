import posts from '$lib/posts/index.js';
import { tags } from '../../../store/tags';
import { error } from '@sveltejs/kit';
import type { IPost } from '$lib/entities/post.js';

export function load(event: any) {

   const { slug } = event.params

   const actualTag = tags.find(tag => slug == tag.slug)
   const newPosts = posts.filter((x: IPost) => x.tags.includes((actualTag)?.name || ''))

   if (newPosts.length > 0) {
      return {
         posts: newPosts,
         actualTag
      }
   } else {
      //front:invalidate,goto,back:redirect

      error(404, 'No posts under this category');
   }


}