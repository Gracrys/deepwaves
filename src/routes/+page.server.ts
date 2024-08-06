
import posts from '$lib/posts';
import thou from '$lib/posts/thou';
import { redirect } from '@sveltejs/kit';

export function load({ params }: {params: any}) {
  let data: any
  try {
    data = posts
  }
  catch (err) {
    throw redirect(302, '/');

  }
  if (!data) throw redirect(302, '/');

  return {posts: data}
  
}
