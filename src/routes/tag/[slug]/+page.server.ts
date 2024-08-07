import posts from '$lib/posts/index.js';
import { tags } from '../../../store/tags';
import { error } from '@sveltejs/kit';
import type { IPost } from '$lib/entities/post.js';


const lookup = new Map();

export function load({ params }: {params: any}) {


    const { slug } = params

    const actualTag = tags.filter(tag => slug == tag.slug) 
   //@ts-ignore
    const contents = {posts: posts.filter((x:IPost) => x.tags.includes(actualTag[0].name)), actualTag};


     if(contents.posts.length > 0){
        return contents
     }else{
 
        error(404, 'No posts under this category');
		

}

   
}