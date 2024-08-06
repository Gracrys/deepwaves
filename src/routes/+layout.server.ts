
import lastFmClient from '$lib/client';
import { redirect } from '@sveltejs/kit';
import { myselfTracksStore } from '../store/lastFm';

export async function load({ params }: {params: any}) {
  let lastFm
  
   
    try {
       lastFm = await( lastFmClient()).getMyself()
     
    } catch (error) {
      console.log(error)
    }

    
    //userStore.set(lastFm)
 


  return {lastFm: lastFm.recenttracks}
  
}

