import posts from "$lib/posts"

/*export  const tags = [
    {
        name: "#review",
        slug: "review"
    },
    {
        name: "#obscure",
        slug: "obscure"
    },
    {
        name: "#noise",
        slug: "noise"
    },
    {
        name: "#powernoise",
        slug: "powernoise"
    },{
        name: "#garage",
        slug: "garage"
    },
    {
        name:"#industrial",
        slug: "industrial"
    },
    {
        name:"#electronic",
        slug: "electronic"
    },
    {
        name:"#experimental",
        slug: "experimental"
    },
    {
        name:"#glitch",
        slug: "glitch"
    },
    {
        name:"#glitchcore",
        slug: "glitchcore"
    },
    {
        name:"#triphop",
        slug: "triphop"
    },
    {
        name:"#alternative",
        slug: "alternative"
    },
     {
        name:"#downtempo",
        slug: "downtempo"
    },
    {
        name:"#progressive",
        slug: "progressive"
    },
 {
        name:"#symphonic",
        slug: "symphonic"
    },
{
        name:"#melodic",
        slug: "melodic"
    },
]
*/

export const tags = (Array.from(new Set(posts.map(x => x.tags).flat()))).sort().map(x => ({
    name: x.toLowerCase(),
    slug: x.replace('#', '')
}))