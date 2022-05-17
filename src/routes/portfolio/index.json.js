import { config } from '$lib/config.js';
import { processPosts } from '$lib/wpResponseParser.js';

export async function get() {

    const data = await fetch(`${config.api}/posts?per_page=100&_embed=wp:term`)
        .then((response) => response.json())
        .then((json) => {
          return processPosts(json);
        });

    return {
        body: data
    };
    
}