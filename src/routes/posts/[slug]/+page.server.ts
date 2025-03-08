import type { IPost } from "$lib/entities/post";
import posts from "$lib/posts";
import { error } from "@sveltejs/kit";
import showdown from 'showdown';

const converter = new showdown.Converter()


export async function load({ params }: {params: {slug: string}}) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const { slug } = params
    const post = posts.find((x:IPost) => x.slug == (slug ))
    if (post) {
        return { post:{...post, html:post.md ? converter.makeHtml(post.md) : post.html} };
    } else {
        error(400, 'Post Not Found');
    }
}