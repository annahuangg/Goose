// import adapter from '@sveltejs/adapter-static';
// import sveltePreprocess from 'svelte-preprocess';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   preprocess: sveltePreprocess(),

//   kit: {
//     adapter: adapter(),
//   }
// };

// export default config;

import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess(),

  kit: {
    adapter: adapter({
      // Vercel-specific options (if any) go here
    }),
    paths: {
      base: '' // Leave empty for local development
    }
  }
};

export default config;