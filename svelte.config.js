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

// import adapter from '@sveltejs/adapter-vercel';
// import sveltePreprocess from 'svelte-preprocess';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   preprocess: sveltePreprocess(),

//   kit: {
//     adapter: adapter({
//       // Vercel-specific options (if any) go here
//     }),
//     paths: {
//       base: '' // Leave empty for local development
//     }
//   }
// };

// export default config;

import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH || '/Goose' // Default to '/Goose'
		}
	}
};

export default config;
