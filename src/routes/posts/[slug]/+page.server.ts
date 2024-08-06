import type { IPost } from "$lib/entities/post";
import posts from "$lib/posts";
import { error } from "@sveltejs/kit";
import showdown from 'showdown';

const converter = new showdown.Converter()


export async function load({ params }: {params: any}) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const { slug } = params
    const post = posts.find((x:IPost) => x.slug == slug)
    if (post) {
        return { post:{...post, html:converter.makeHtml(post.md)} };
    } else {
        error(400, 'Post Not Found');
    }
}