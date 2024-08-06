
import lastFmClient from '$lib/client';
import posts from '$lib/posts';
import thou from '$lib/posts/thou';
import { redirect } from '@sveltejs/kit';
import { myselfTracksStore } from '../store/lastFm';

export async function load({ params }: {params: any}) {
  let data: any
  let lastFm
  try {
    data = posts
   
    try {
       lastFm = await( lastFmClient()).getMyself()
     
     
    } catch (error) {
      console.log(error)
    }

    
    //userStore.set(lastFm)
  }
  catch (err) {
    throw redirect(302, '/');

  }
  if (!data) throw redirect(302, '/');

  return {posts: data, lastFm: lastFm.recenttracks}
  
}

