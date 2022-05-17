import { config } from '$lib/config.js';
import { processPost } from '$lib/wpResponseParser.js';

export async function get({ params }) {

    const slug = params.slug;

    const data = await fetch(`${config.api}/posts?slug=${slug}&_embed=wp:term`)
        .then((response) => response.json())
        .then((json) => {
          return processPost(json[0]);
        });

    return {
        body: data
    };
    
}