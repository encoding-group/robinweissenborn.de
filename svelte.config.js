import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    prerender: {
      default: true,
    },

    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "src/scss/_variables.scss" as *;',
          },
        },
      },
    },
  },

  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/scss/_variables.scss" as *;',
      },
    }),
  ],
};

export default config;
