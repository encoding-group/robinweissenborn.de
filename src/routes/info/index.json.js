import { config } from '$lib/config.js';
import { processInfo } from '$lib/wpResponseParser.js';

export async function get() {

    const data = await fetch(`${config.api}/pages?slug=info`)
        .then((response) => response.json())
        .then((json) => {
          return processInfo(json[0]);
        });

    return {
        body: data
    };
    
}