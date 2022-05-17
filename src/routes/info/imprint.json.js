import { config } from '$lib/config.js';
import { processInfo } from '$lib/wpResponseParser.js';

export async function get() {

    const data = await fetch(`${config.api}/pages?slug=imprint`)
        .then((response) => response.json())
        .then((json) => {
            return {
                ...processInfo(json[0]),
                column2: json[0].acf.column_2,
                column3: json[0].acf.column_3,
            };
        });

    return {
        body: data
    };
    
}